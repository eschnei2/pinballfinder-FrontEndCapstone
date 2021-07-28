import React, { useContext, useEffect, useState } from "react"
import { MachineContext } from "./MachinesProvider"
import { useParams, useHistory } from "react-router-dom"
import ReactPlayer from "react-player"

export const MachineDetail = () => {
    const { getMachineById, removeMachine } = useContext(MachineContext)

    const[machine, setMachine] = useState({})

    const {machineId} = useParams();
    const history = useHistory();

     const handleRemove = () => {
        removeMachine(machineId)
        .then(() => {
            history.push("/machines")
        })
    } 

     useEffect(() => {
        console.log("useEffect", machineId)
        getMachineById(machineId)
        .then((response) => {
            setMachine(response)
        })
    }, []) 

    console.log(machineId)


    return (
        <>
        <h1>{machine.name}</h1>
        <ReactPlayer url={machine.videoURL} />
        <button onClick={handleRemove}>
            fuckem up
        </button>
        </>
    )

}