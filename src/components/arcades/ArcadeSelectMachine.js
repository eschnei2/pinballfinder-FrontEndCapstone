import React, { useContext, useEffect } from "react"
/* import { ArcadeContext } from "./ArcadeProvider"
import { ArcadeItem } from "./ArcadeItem" */
import { ArcadeMachineContext } from "../arcademachine/ArcadeMachineProvider"
import { ArcadeMachineAddItem } from "../arcademachine/ArcadeMachineAddItem"
import { ArcadeContext } from "./ArcadeProvider"
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



  /* let chicken

  const findDinner = () => {
  for (const machine of machines) {
      for(const foo of arcadeMachines){
          if (foo.machineId === machine.id  && foo.arcadeId !== parseInt(arcadeId)){
          chicken = machine
          }
      }
  }
   return chicken
} */

/* let findUser = friends.find(friend => friend.currentUserId === currentUser  &&  friend.userId === parseInt(friendId))
    const foundUser = findUser?.id */

 const mapper = machines.arcademachines?.map(machiner => {
     return machiner
 }
 )
 

 /* console.log(mapper) */

  const currentUserId = parseInt(sessionStorage.getItem("pinball_user"))
  return (
    <>
    <h1>AddMachine</h1>
    <div className="arcadesAdd">
      {
        machines.map(arcadeMachine => { 
        return <ArcadeMachineAddItem key={arcadeMachine.id} arcadeMachine={arcadeMachine} />
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