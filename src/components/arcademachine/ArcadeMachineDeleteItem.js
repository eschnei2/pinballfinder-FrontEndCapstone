import React, { useContext, useEffect, useState } from "react"
import { ArcadeMachineContext } from "./ArcadeMachineProvider"
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

export const ArcadeMachineDeleteItem = ({ arcadeMachine }) => {
    const { removeArcadeMachine } = useContext(ArcadeMachineContext)
    

    const handleRemove = () => {
        removeArcadeMachine(arcadeMachine.id)
    } 

return(
    <>
    <Grid container
            justifyContent="space-around"
            item sm={3}
            alignItems="flex-start">
    <Button onClick={handleRemove}>
        {arcadeMachine.machine?.name}
    </Button>
    </Grid>

    
    </>
)
}