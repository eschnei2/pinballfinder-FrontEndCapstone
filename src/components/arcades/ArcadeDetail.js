import React, { useContext, useEffect, useState } from "react"
import { ArcadeContext } from "./ArcadeProvider"
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import { ArcadeMachineContext } from "../arcademachine/ArcadeMachineProvider"


export const ArcadeDetail = () => {
    const { getArcadeById, removeArcade } = useContext(ArcadeContext)
    const { arcadeMachines, getArcadeMachines } = useContext(ArcadeMachineContext)


    const[arcade, setArcade] = useState({})
    const currentUserId = parseInt(sessionStorage.getItem("pinball_user"))

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

    useEffect(() => {
        getArcadeMachines()
      }, [])

    let handleEdit
    if (currentUserId === arcade.userId){
        handleEdit = <button onClick={() => {
            history.push(`/arcades/edit/${arcade.id}`)
        }}>Edit Arcade</button>
    }

    let handleDelete
    if( currentUserId === arcade.userId ) {
        handleDelete =
        <button onClick={handleRemove}>
            delete
        </button>
    }

    let handleAddMachine
    if(currentUserId === arcade.userId) {
        handleAddMachine =
        <Link to={`/arcades/addtolocation/${arcade.id}`}>
         add/remove machine
        </Link>
    }




    return (
    <>
    <h3>Pinball machines on site</h3>
    <ul>
        {arcadeMachines.map(machine => {
            if (machine.arcadeId === parseInt(arcadeId))
            return(
            <>
            <li>{machine.machine?.name}</li>
            </>
            )
        })}
    </ul>
    {handleEdit}
    {handleAddMachine}
        <h1>{arcade.name}</h1>
        {handleDelete}
    </>
    )

}