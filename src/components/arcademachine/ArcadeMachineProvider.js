import React, { useState, createContext } from "react"

export const ArcadeMachineContext = createContext()

export const ArcadeMachineProvider = (props) => {
    const [arcadeMachines, setArcadeMachines] = useState([])
    const [searchTerms, setSearchTerms] = useState("");

    const getArcadeMachineById = (id) => {
        return fetch(`http://localhost:8088/arcadeMachines/${id}?_expand=arcade&_expand=machine`).then((res) =>
            res.json()
        ) 
    }

     const getArcadeMachines = () => {
        return fetch("http://localhost:8088/arcadeMachines?_expand=arcade&_expand=machine")
            .then((res) => res.json())
            .then(setArcadeMachines)
    } 
    const addArcadeMachine = (arcadeMachineObj) => {
        return fetch("http://localhost:8088/arcadeMachines", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(arcadeMachineObj),
        }).then(getArcadeMachines)
    }

    const updateArcadeMachine = (arcadeMachine) => {
        return fetch(`http://localhost:8088/arcadeMachines/${arcadeMachine.id}?_expand=arcade&_expand=machine`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(arcadeMachine),
        }).then(getArcadeMachines)
    }

    const removeArcadeMachine = arcadeMachineId => {
        return fetch(`http://localhost:8088/arcadeMachines/${arcadeMachineId}?_expand=arcade&_expand=machine`, {
            method: "DELETE"
        })
            .then(getArcadeMachines)
    }

    return (
        <ArcadeMachineContext.Provider
            value={{
                arcadeMachines,
                getArcadeMachines,
                addArcadeMachine,
                getArcadeMachineById,
                updateArcadeMachine,
                removeArcadeMachine,
                searchTerms,
                setSearchTerms
            }}
        >
            {props.children}
        </ArcadeMachineContext.Provider>
    )
}