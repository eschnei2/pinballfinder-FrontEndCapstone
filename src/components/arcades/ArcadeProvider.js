import React, { useState, createContext } from "react"

export const ArcadeContext = createContext()

export const ArcadeProvider = (props) => {
    const [arcades, setArcades ] = useState([])

    const getArcades = () => {
        return fetch("http://localhost:8088/arcades?_expand=user")
        .then(response => response.json())
        .then(setArcades)
    }

    const addArcade = arcadeObj => {
        return fetch("http://localhost:8088/arcades", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(arcadeObj),
        }).then(getArcades)
    }

    const removeArcade = id => {
        return fetch(`http://localhost:8088/arcades/${id}`, {
            method: "DELETE"
        })
        .then(getArcades)
    }

    const getArcadeById = id => {
        return fetch(`http://localhost:8088/arcades/${id}?_expand=user`)
        .then(response => response.json())
    }

    const updateArcade = arcade => {
        return fetch(`http://localhost:8088/arcades/${arcade.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(arcade),
        }).then(getArcades)
    }

    return (
        <ArcadeContext.Provider value={{
            arcades, getArcades, addArcade, removeArcade, getArcadeById, updateArcade
        }}>
            {props.children}
        </ArcadeContext.Provider>
    )
}