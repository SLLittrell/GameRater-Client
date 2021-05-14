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
  
    return(
        <>
            <section className="gameReview">
                <div>{reviewFilter?.map(gr =><div key={gr.id}>
                    Title: {gr.title}<br></br>{gr.review}</div>)}
                
                </div>
            </section>
        </>
    )
}
