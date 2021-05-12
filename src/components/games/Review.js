import React, { useContext, useEffect, useState } from "react"
import { Link, useHistory, useParams } from "react-router-dom"
import { GameContext } from "./GameProvider.js"


export const ReviewList=()=>{
    const {getReviews, reviews} = useContext(GameContext)
    const {gameId} = useParams()
    

    useEffect(() =>{
        getReviews()
    },[])
    
    const reviewFilter = reviews.filter(review => review.game.id === parseInt(gameId))
    console.log(reviews)
    // debugger
    return(
        <>
            <section>
                <div>{reviewFilter?.map(gr =><div key={gr.id}>
                    Title: {gr.title}<br></br>{gr.review}<br></br>
                    Rating: {gr.rating}</div>)}
                
                </div>
            </section>
        </>
    )
}
// (games => games.id === parseInt(gameId))