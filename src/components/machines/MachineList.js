import React, { useContext, useEffect, useState } from "react"
import { MachineContext } from "./MachinesProvider"
import { MachineItem } from "./MachineItem"
import { Link } from "react-router-dom"
import SearchField from "react-search-field"


export const MachineList = () => {
  const { machines, getMachines, searchTerms } = useContext(MachineContext)

  const [ filteredMachines, setFiltered ] = useState([])

  useEffect(() => {
    if (searchTerms !== "") {
      const subset = machines.filter(machine => machine.name.toLowerCase().includes(searchTerms))
      setFiltered(subset)
    } else {
      setFiltered(machines)
    }
  }, [searchTerms, machines])

  useEffect(() => {
    getMachines()
  }, [])

  const currentUserId = parseInt(sessionStorage.getItem("pinball_user"))

  return (
    <>
    <Link className="nav-link" to="/machines/create">
                        Add a pinball machine
    </Link>
    <h1>Pinball Machines</h1>
    <div className="machines">
      {
        filteredMachines.map(machine => {
        return <MachineItem key={machine.id} machine={machine} />
        })
      }
    </div>
    </>
  )
}