import React, { useContext, useEffect, useState } from "react"
import { ArcadeContext } from "./ArcadeProvider"
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom"


export const ArcadeDetail = () => {
    const { getArcadeById, removeArcade } = useContext(ArcadeContext)

    const[arcade, setArcade] = useState({})

    const {arcadeId} = useParams();
    const history = useHistory();

     const handleRemove = () => {
        removeArcade(arcadeId)
        .then(() => {
            history.push("/arcades")
        })
    } 

     useEffect(() => {
        getArcadeById(arcadeId)
        .then((response) => {
            setArcade(response)
        })
    }, []) 


    return (
        <>

    <Link to={`/arcades/addtolocation/${arcade.id}`}>
        add machine
    </Link>
        <h1>{arcade.name}</h1>
        <button onClick={handleRemove}>
            delete
        </button>
        </>
    )

}