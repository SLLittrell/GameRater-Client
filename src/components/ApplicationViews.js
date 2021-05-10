import React from "react"
import { Route} from "react-router-dom"
import { GameForm } from "./games/GameForm.js"
import { GameList } from "./games/GameList.js"
import { GameProvider } from "./games/GameProvider.js"

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
                    <GameList/>
                </Route>
                <Route exact path="/games/new">
                    <GameForm/>
                </Route>
            </GameProvider>
        </main>
    </>
}