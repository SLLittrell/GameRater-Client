import React from "react"
import { Route} from "react-router-dom"
import { GameForm } from "./games/GameForm.js"
import { GameList } from "./games/GameList.js"
import { GameProvider } from "./games/GameProvider.js"
import {GameDetails} from "./games/GameDetails"
import { ReviewForm } from "./games/ReviewForm.js"
import { ReviewList } from "./games/Review.js"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <GameProvider>
                {/* <Route exact path="/">
                    <Home/>
                </Route> */}
                <Route exact path="/games">
                    <GameList />
                </Route>
                <Route exact path="/games/new">
                    <GameForm />
                </Route>
                <Route exact path="/games/edit/:gameId(\d+)">
                    <GameForm />
                </Route>
                <Route exact path="/games/:gameId(\d+)">
                    <GameDetails />
                    <ReviewList />
                </Route>
                <Route exact path="/games/:gameId(\d+)/review">
                    <ReviewForm />
                </Route>
            </GameProvider>
        </main>
    </>
}