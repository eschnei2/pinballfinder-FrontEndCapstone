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
import { ForumProvider } from "./forums/ForumProvider"
import { ForumList } from "./forums/ForumList"
import { ForumForm } from "./forums/ForumForm"


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
            <ForumProvider>
                <Route exact path="/machines/detail/:machineId(\d+)">
                    <MachineDetail />
                    <ForumList />
                </Route>
            </ForumProvider>
        </MachineProvider>

        <ArcadeProvider>
            <Route exact path="/arcades">
               <ArcadeList />
            </Route>
            <ForumProvider>
                <Route exact path="/arcades/detail/:arcadeId(\d+)">       
                    <ArcadeDetail />
                </Route>
                <Route exact path="/forums/edit/:forumId(\d+)">       
                    <ForumForm />
                </Route>
            </ForumProvider>
        </ArcadeProvider>
        </>
    )
}