import React, { useContext, useEffect, useState } from "react"
import { ArcadeMachineContext } from "./ArcadeMachineProvider"
import { useParams } from "react-router-dom"


export const ArcadeMachineDeleteItem = ({ arcadeMachine }) => {
    const { removeArcadeMachine } = useContext(ArcadeMachineContext)
    const currentUserId = parseInt(sessionStorage.getItem("pinball_user"))
    const {arcadeId} = useParams();
    

    const handleRemove = () => {
        removeArcadeMachine(arcadeMachine.id)
        .then(() => {
        })
    } 


return(
    <>
    <section className="arcade">
    {arcadeMachine.machine?.name}
    </section>
    <button onClick={handleRemove}>
        delete
    </button>

    
    </>
)
}