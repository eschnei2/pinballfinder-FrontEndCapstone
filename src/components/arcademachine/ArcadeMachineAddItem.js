import React, { useContext, useEffect, useState } from "react"
import { ArcadeMachineContext } from "./ArcadeMachineProvider"
import { useParams } from "react-router-dom"
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import AddIcon from '@material-ui/icons/Add';

export const ArcadeMachineAddItem = ({ arcadeM }) => {
    const { addArcadeMachine, getArcadeMachines, arcadeMachines } = useContext(ArcadeMachineContext)
    const {arcadeId} = useParams();
    
    let findMachine = arcadeMachines.find(foo => foo.machineId === arcadeM.id  &&  foo.arcadeId === parseInt(arcadeId))
    const foundMachine = findMachine?.id

    const handleAdd = () => {
        addArcadeMachine({
            machineId: arcadeM.id,
            arcadeId: parseInt(arcadeId)
        })
    }


    useEffect(() => {
        getArcadeMachines()
      }, [])


 console.log(foundMachine)
 let exist
 if (!foundMachine){
     exist = <>
     <Grid container
            justifyContent="space-around"
            item sm={3}
            alignItems="flex-start">
     <Button onClick={handleAdd}>
     {arcadeM?.name}
     </Button>
     </Grid>
   
     </>

 }


return(
    <>
    {exist}
  
    </>
)
}