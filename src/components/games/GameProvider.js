import React, { useState } from "react"

export const GameContext = React.createContext()

export const GameProvider = (props) => {
    const [ games, setGames ] = useState([])
    const [ category, setCategory ] = useState([])
    const [reviews, setReviews] = useState([])
    const [players, setPlayers] = useState([])

    const getGames = () => {
        return fetch("http://localhost:8000/games", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(setGames)
    }

    const createGame = (game) => {
        return fetch("http://localhost:8000/games", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            },
            body: JSON.stringify(game)
        })
        .then(getGames)
    }

    const getGameById = (gameId) => {
        return fetch(`http://localhost:8000/games/${gameId}`, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
    }

    const updateGame = (game) => {
        return fetch(`http://localhost:8000/games/${game.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            },
            body: JSON.stringify(game)
        })
        .then(getGames)
    }
    
    const getGameCategories = () => {
        return fetch("http://localhost:8000/categories", { 
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
                .then(setCategory)
    }

    const DeleteGame = gameId => {
        return fetch(`http://localhost:8000/games/${gameId}`, {
            method: "DELETE",
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(getGames)
    }

    const getReviews= () => {
        return fetch("http://localhost:8000/reviews", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(setReviews)
    }

    const addReview = (review) => {
        return fetch("http://localhost:8000/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            },
            body: JSON.stringify(review)
        })
        .then(getReviews)
    }

    const addRating = (rating) => {
        return fetch("http://localhost:8000/ratings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            },
            body: JSON.stringify(rating)
        })
    }

    const getPlayers= () => {
        return fetch("http://localhost:8000/players", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(setPlayers)
    }

    return (
        <GameContext.Provider value={{ games, getGames, createGame, getGameCategories, category, getGameById, 
        DeleteGame, reviews, getReviews, addReview, addRating, getPlayers, players }} >
            { props.children }
        </GameContext.Provider>
    )
}