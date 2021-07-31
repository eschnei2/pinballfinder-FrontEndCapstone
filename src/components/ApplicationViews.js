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
import { MachineForm } from "./machines/MachineForum"
import { ArcadeMachineProvider } from "./arcademachine/ArcadeMachineProvider"
import { ArcadeSelectMachine } from "./arcades/ArcadeSelectMachine"


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
            <Route path="/machines/edit/:machineId(\d+)">
                <MachineForm />
            </Route>
            <Route path="/machines/create">
                <MachineForm />
            </Route>
            
            <ForumProvider>
                <FavoriteProvider>
                    <Route exact path="/machines/detail/:machineId(\d+)">
                        <MachineDetail />
                        <ForumList />
                    </Route>
                </FavoriteProvider>
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

        <ArcadeMachineProvider>
            <ArcadeProvider>
              <MachineProvider>
                <Route exact path="/arcades/addtolocation/:arcadeId(\d+)">
                    <ArcadeSelectMachine />
                </Route>
              </MachineProvider>
            </ArcadeProvider>
        </ArcadeMachineProvider>
        </>
    )
}