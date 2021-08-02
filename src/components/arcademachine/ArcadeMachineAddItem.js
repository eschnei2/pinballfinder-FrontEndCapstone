import React, { useContext, useEffect, useState } from "react"
import { ArcadeMachineContext } from "./ArcadeMachineProvider"
import { useParams } from "react-router-dom"


export const ArcadeMachineAddItem = ({ arcadeM }) => {
    const { addArcadeMachine, getArcadeMachines, arcadeMachines } = useContext(ArcadeMachineContext)
    const currentUserId = parseInt(sessionStorage.getItem("pinball_user"))
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
     <section className="arcade">
     {arcadeM?.name}
     </section>
     <button onClick={handleAdd}>
         add
     </button>
   
     </>

 }


return(
    <>
    {exist}
  
    </>
)
}