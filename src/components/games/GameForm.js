import React, { useContext, useState, useEffect } from "react"
import { GameContext } from "./GameProvider.js"
import { useHistory, useParams } from 'react-router-dom'


export const GameForm = () => {
    const history = useHistory()
    const { createGame, getGameCategories, category, updateGame } = useContext(GameContext)
    const {gameId} = useParams()
 
    const [currentGame, setCurrentGame] = useState({
        title: "",
        description: "",
        releaseYear: 0,
        numberPlayers: 0,
        timeToPlay: 0,
        age: 0,
        creator: 0,
        categories:[]

    })

   
    useEffect(() => {
        getGameCategories()
    }, [])

   
    const changeGameState = (event) => {
        const newGameState = { ...currentGame }
        newGameState[event.target.id]= event.target.value
        setCurrentGame(newGameState)
    }
    

    const changeCategory = (event) => {
         const newCategories = { ...currentGame }
        if(event.target.checked) {
            newCategories.categories.push(
                parseInt(event.target.value)   
            )
        }
        else {
            const index = newCategories.categories.indexOf(parseInt(event.target.value))
            newCategories.categories.splice(index, 1)
        }
        

        setCurrentGame(newCategories)
    }


    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Register New Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title" required autoFocus className="form-control"
                        value={currentGame.title}
                        onChange={changeGameState}
                    />
                    <label htmlFor="description">Description: </label>
                    <input type="text" id="description"  className="form-control"
                        value={currentGame.description}
                        onChange={changeGameState}
                    />
                    <label htmlFor="releaseYear" >Year released: </label>
                    <input type="text" id="releaseYear"  className="form-control"
                        value={currentGame.releaseYear}
                        onChange={changeGameState}
                    />
                    <label htmlFor="numberPlayers">Maximum number of players: </label>
                    <input type="text" id="numberPlayers" required  className="form-control"
                        value={currentGame.numberPlayers}
                        onChange={changeGameState}
                    />
                    <label htmlFor="timeToPlay">Average time it takes to play in minutes: </label>
                    <input type="text" id="timeToPlay" required  className="form-control"
                        value={currentGame.timeToPlay}
                        onChange={changeGameState}
                    />
                    <label htmlFor="age">Age: </label>
                    <input type="text" id="age" required  className="form-control"
                        value={currentGame.age}
                        onChange={changeGameState}    
                    />
                    
                    <label htmlFor="categories">Categories:</label>
                    {category.map(type=><div key={type.id}><input type="checkbox" onChange={changeCategory} id="categories" value={type.id}></input><label htmlFor="categories">{type.label}</label></div>)}
                    
                    
                        
                </div>
            </fieldset>

            {/* You create the rest of the input fields for each game property */}

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()
                    if(currentGame.categories !== []){
                        const game = {
                            title: currentGame.title,
                            description: currentGame.description,
                            releaseYear: parseInt(currentGame.releaseYear),
                            numberPlayers: parseInt(currentGame.numberPlayers),
                            timeToPlay: parseInt(currentGame.timeToPlay),
                            age: parseInt(currentGame.age),
                            creator: currentGame.creator,
                            categories:currentGame.categories
                    }

                    // Send POST request to your API
                    createGame(game)
                        .then(() => history.push("/games"))
                    }
                    
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}