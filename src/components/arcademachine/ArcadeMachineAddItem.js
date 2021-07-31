import React, { useContext, useEffect, useState } from "react"
import { ArcadeMachineContext } from "./ArcadeMachineProvider"
import { useParams } from "react-router-dom"


export const ArcadeMachineAddItem = ({ arcadeMachine }) => {
    const { addArcadeMachine } = useContext(ArcadeMachineContext)
    const currentUserId = parseInt(sessionStorage.getItem("pinball_user"))
    const {arcadeId} = useParams();
    

    const handleAdd = () => {
        addArcadeMachine({
            machineId: arcadeMachine.id,
            arcadeId: parseInt(arcadeId)
        })
    }
    /*   let findmachine = arcadeMachine.arcadeMachines.find(machine => machine.machineId === parseInt(arcadeId))
    const foundMachine = findmachine?.id */

/* console.log(foundMachine)  */

/* let findUser = friends.find(friend => friend.currentUserId === currentUser  &&  friend.userId === parseInt(friendId))
    const foundUser = findUser?.id */


return(
    <>
    <section className="arcade">
    {arcadeMachine?.name}
    </section>
    <button onClick={handleAdd}>
        add
    </button>

    
    </>
)
}