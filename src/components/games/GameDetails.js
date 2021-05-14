import React, { useContext, useEffect, useState } from "react"
import { Link, useHistory, useParams } from "react-router-dom"
import { GameContext } from "./GameProvider.js"

export const GameDetails = () => {
    const { getGameById, DeleteGame, addRating, getPlayers, players } = useContext(GameContext)
    const [game, setGame] = useState({})

    const history =useHistory()
    const {gameId} = useParams()

    useEffect(() => {
        getGameById(gameId)
            .then((res)=> setGame(res))
    }, [])

    useEffect(() => {
        getPlayers()
    }, [])


    const handleDelete = () => {
        DeleteGame(gameId)
        history.push({ pathname: "/games" })
    }

    const [rating, setRating] = useState({
        rating: 0,
        player: 0,
        gameId: parseInt(gameId)
    })
    
    const ratingChangeEvent =(event) => {
        const newRating = {...rating}
        newRating[event.target.id]= parseInt(event.target.value)
        setRating(newRating)
    }
    
   
    return (
        <article className="game">
            <section  className="game">
                <div className="game__title">{game?.title}</div>
                <div>Average Rating: {game.average_rating?.toFixed(2)}</div>
            </section><br></br>
            <label htmlFor="rating">Rate this game:</label><br></br>
            <select  id="rating" onChange={ratingChangeEvent} required >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
            </select>
            <button onClick={()=> {
                addRating(rating)
            }}>Save Rating</button><br></br>
                    
            <button className="btn btn-2 btn-sep icon-create"
                onClick={handleDelete}>Delete this Game
            </button>
            <button className="btn btn-2 btn-sep icon-create"
                onClick={()=> history.push(`/games/${gameId}/review`)}>Add a review
            </button>
            <button className="edit" onClick={() => history.push(`/games/edit/${gameId}`)}>Edit</button>
        </article>
    )
}