import React, { useContext, useEffect, useState } from "react"
import { ArcadeContext } from "./ArcadeProvider"
import { useParams, useHistory } from "react-router-dom"


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
        console.log("useEffect", arcadeId)
        getArcadeById(arcadeId)
        .then((response) => {
            setArcade(response)
        })
    }, []) 


    return (
        <>
        <button onClick={handleRemove}>
            fuckem up
        </button>
        </>
    )

}