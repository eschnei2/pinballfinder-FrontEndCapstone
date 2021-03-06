import React, { useState, createContext } from "react"

export const MachineContext = createContext()

export const MachineProvider = (props) => {
    const [machines, setMachines ] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")

    const getMachines = () => {
        return fetch("http://localhost:8088/machines?_embed=arcadeMachines")
        .then(response => response.json())
        .then(setMachines)
    }

    const addMachine = machineObj => {
        return fetch("http://localhost:8088/machines", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(machineObj),
        }).then(getMachines)
    }

    const removeMachine = id => {
        return fetch(`http://localhost:8088/machines/${id}`, {
            method: "DELETE"
        })
        .then(getMachines)
    }

    const getMachineById = id => {
        return fetch(`http://localhost:8088/machines/${id}?_embed=arcadeMachines`)
        .then(response => response.json())
    }

    const updateMachine = machine => {
        return fetch(`http://localhost:8088/machines/${machine.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(machine),
        }).then(getMachines)
    }

    return (
        <MachineContext.Provider value={{
            machines, getMachines, addMachine, removeMachine, getMachineById, updateMachine, searchTerms, setSearchTerms
        }}>
            {props.children}
        </MachineContext.Provider>
    )
}
