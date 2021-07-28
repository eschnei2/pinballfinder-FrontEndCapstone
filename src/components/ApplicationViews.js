import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { FavoriteList } from "./favorites/FavoriteList"
import { FavoriteProvider } from "./favorites/FavoriteProvider"
import { UserProvider } from "./users/UserProvider"
import { MachineList } from "./machines/MachineList"
import { MachineProvider } from "./machines/MachinesProvider"
import { MachineDetail } from "./machines/MachineDetail"
import { ArcadeProvider } from "./arcades/ArcadeProvider"
import { ArcadeList } from "./arcades/ArcadeList"
import { ArcadeDetail } from "./arcades/ArcadeDetail"


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

        <MachineProvider>
            <Route exact path="/machines">
               <MachineList />
            </Route>
            <Route exact path="/machines/detail/:machineId(\d+)">
               <MachineDetail />
            </Route>
        </MachineProvider>

        <ArcadeProvider>
            <Route exact path="/arcades">
               <ArcadeList />
            </Route>
            <Route exact path="/arcades/detail/:arcadeId(\d+)">
               <ArcadeDetail />
            </Route>
        </ArcadeProvider>
        </>
    )
}