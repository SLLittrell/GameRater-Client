import React, { useContext, useState, useEffect } from "react"
import { GameContext } from "./GameProvider.js"
import { useHistory, useParams } from 'react-router-dom'

export const ReviewForm = () => {
    const {addReview} = useContext(GameContext)
    const {gameId} = useParams()
    const history = useHistory()

    const [review, setReview] = useState({
        title: "",
        review: "",
        rating: 0,
        gameId: parseInt(gameId),
        reviewer: 0
    })

    const handleReviewChange =(event) => {
        const newReview = { ...review }
        newReview[event.target.id]= event.target.value
        setReview(newReview)
    }


    return(
        <>
            <h1>Review this Game</h1>
            <form className="reviewForm">
                <fieldset>
                    <label htmlFor="title">Title:</label><br></br>
                    <input type="text" id="title" required autoFocus onChange={handleReviewChange}/><br></br>
                    <label htmlFor="review" >Review:</label><br></br>
                    <textarea id="review" onChange={handleReviewChange} required></textarea><br></br>
                    <label htmlFor="rating">Rate this game:</label><br></br>
                    <select  id="rating" onChange={handleReviewChange} required >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </fieldset>

                <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()
                    
                        const reviewed = {...review}
                        reviewed.gameId = parseInt(reviewed.gameId)
                        reviewed.rating = parseInt(reviewed.rating)
                
                    addReview(reviewed)
                        .then(() => history.push(`/games/${gameId}`))
                }
                    
                }
                className="btn btn-primary">Add Review</button>
            </form>
        </>
    )
}