import React, { useContext, useEffect } from "react"
import { ArcadeMachineContext } from "../arcademachine/ArcadeMachineProvider"
import { ArcadeMachineAddItem } from "../arcademachine/ArcadeMachineAddItem"
import { useParams } from "react-router-dom"
import { ArcadeMachineDeleteItem } from "../arcademachine/ArcadeMachineDeleteItem"
import { MachineContext } from "../machines/MachinesProvider"


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
    <h1>AddMachine</h1>
    <div className="arcadesAdd">
      {
        machines.map(arcadeM => { 
        return <ArcadeMachineAddItem key={arcadeM.id} arcadeM={arcadeM} />
        })
      }
      <h1>Remove</h1>
      {
        arcadeMachines.map(arcadeMachine => {
        if(arcadeMachine.arcadeId === parseInt(arcadeId))
        return <ArcadeMachineDeleteItem key={arcadeMachine.id} arcadeMachine={arcadeMachine} />
        })
      }
    </div>
    </>
  )
}