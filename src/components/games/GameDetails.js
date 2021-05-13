import React, { useContext, useEffect, useState } from "react"
import { Link, useHistory, useParams } from "react-router-dom"
import { GameContext } from "./GameProvider.js"

export const GameDetails = () => {
    const { getGameById, DeleteGame } = useContext(GameContext)
    const [game, setGame] = useState({})

    const history =useHistory()
    const {gameId} = useParams()

    useEffect(() => {
        getGameById(gameId)
            .then((res)=> setGame(res))
    }, [])


    const handleDelete = () => {
        DeleteGame(gameId)
        history.push({ pathname: "/games" })
    }
    

    console.log(game)
    return (
        <article className="game">
            <section  className="game">
                <div className="game__title">{game?.title}</div>
                    
            </section>
                    
            <button className="btn btn-2 btn-sep icon-create"
                onClick={handleDelete}>Delete this Game
            </button>
            <button className="btn btn-2 btn-sep icon-create"
                onClick={()=> history.push(`/games/${gameId}/review`)}>Add a review
            </button>
        </article>
    )
}