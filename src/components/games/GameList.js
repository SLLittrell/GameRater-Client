import React, { useContext, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { GameContext } from "./GameProvider.js"

export const GameList = (props) => {
    const { games, getGames } = useContext(GameContext)

    const history =useHistory()

    useEffect(() => {
        getGames()
    }, [])

    return (
        <article className="games">
            {
               games.map(game => {
                return <section key={`game--${game.id}`} className="game">
                    <div className="game__title"><Link to={`/games/${game.id}`} >{game.title}</Link></div>
                    
                </section>
                    
                
                })
            }
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/games/new" })
                }}>Register New Game
            </button>
        </article>
    )
}