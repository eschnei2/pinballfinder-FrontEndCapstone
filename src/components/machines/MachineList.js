import React, { useContext, useEffect } from "react"
import { MachineContext } from "./MachinesProvider"
import { MachineItem } from "./MachineItem"


export const MachineList = () => {
  const { machines, getMachines } = useContext(MachineContext)

  useEffect(() => {
    getMachines()
  }, [])

  const currentUserId = parseInt(sessionStorage.getItem("pinball_user"))

  return (
    <>
    <h1>Pinball Machines</h1>
    <div className="machines">
      {
        machines.map(machine => {
        return <MachineItem key={machine.id} machine={machine} />
        })
      }
    </div>
    </>
  )
}