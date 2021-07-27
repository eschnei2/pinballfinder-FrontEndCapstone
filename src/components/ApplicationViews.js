import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { FavoriteList } from "./favorites/FavoriteList"
import { FavoriteProvider } from "./favorites/FavoriteProvider"


export const ApplicationViews = () => {
    return (
        <>
        <Route exact path="/">
                <Home />
        </Route>

        <FavoriteProvider>
            <Route exact path ="/favorites">
                <FavoriteList />
            </Route>
        </FavoriteProvider>
        </>
    )
}