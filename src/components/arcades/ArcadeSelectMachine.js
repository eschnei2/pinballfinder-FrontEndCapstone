import React, { useContext, useEffect } from "react"
import { ArcadeMachineContext } from "../arcademachine/ArcadeMachineProvider"
import { ArcadeMachineAddItem } from "../arcademachine/ArcadeMachineAddItem"
import { useParams } from "react-router-dom"
import { ArcadeMachineDeleteItem } from "../arcademachine/ArcadeMachineDeleteItem"
import { MachineContext } from "../machines/MachinesProvider"
import pinballAliens from '../images/pinballAliens.jpg'
import Grid from '@material-ui/core/Grid'


export const ArcadeSelectMachine = () => {
  const { arcadeMachines, getArcadeMachines } = useContext(ArcadeMachineContext)
  const { machines, getMachines } = useContext(MachineContext)
  const {arcadeId} = useParams();

  useEffect(() => {
    getArcadeMachines()
  }, [])

  useEffect(() => {
    getMachines()
  }, [])

  return (
    <>
    <Grid container
        justifyContent="center" direction="column" alignItems="center">
    <img src={pinballAliens} width="800" height="300" />
    </Grid>
    <h1>Add a machine</h1>
    <Grid container
            justifyContent="space-around"
            item xxl={6}
            alignItems="flex-start">

      {
        machines.map(arcadeM => { 
        return <ArcadeMachineAddItem key={arcadeM.id} arcadeM={arcadeM} />
        })
      }
      </Grid>
      <h1>Remove a machine</h1>
      <Grid container
            justifyContent="space-around"
            item xxl={6}
            alignItems="flex-start">
      {
        arcadeMachines.map(arcadeMachine => {
        if(arcadeMachine.arcadeId === parseInt(arcadeId))
        return <ArcadeMachineDeleteItem key={arcadeMachine.id} arcadeMachine={arcadeMachine} />
        })
      }
      </Grid>

    </>
  )
}