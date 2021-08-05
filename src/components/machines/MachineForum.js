
import { useHistory, useParams } from 'react-router-dom'
import { MachineContext } from './MachinesProvider'
import React, { useContext, useEffect, useState } from "react"
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export const MachineForm = () => {
    const { addMachine, updateMachine, getMachineById } = useContext(MachineContext)


    const currentUserId = parseInt(sessionStorage.getItem("pinball_user"))

    const [machine, setMachine] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const history = useHistory()
    const {machineId} = useParams()

    const handleControlledInputChange = (event) => {
        const newMachine = { ...machine }
        newMachine[event.target.id] = event.target.value
        setMachine(newMachine)
    }

    const handleClickSaveMachine = () => {
        if (parseInt(machine.locationId) === 0 || machine.name === ""){
            window.alert("Please fill out the form completely")
        } else {
            setIsLoading(true)
            if (machineId) {
                updateMachine({
                    id: machine.id,
                    name: machine.name,
                    maker: machine.maker,
                    videoURL: machine.videoURL,
                    userId: currentUserId
                })
                .then(() => history.push(`/machines/detail/${machine.id}`))
            } else {
                addMachine({
                    name: machine.name,
                    maker: machine.maker,
                    videoURL: machine.videoURL,
                    userId: currentUserId
                })
                .then(() => history.push(`/machines`))
            }
        }
    }

    useEffect(() => {
        if (machineId){
        getMachineById(machineId)
        .then((machine) => {
          setMachine(machine)
          setIsLoading(false)
          })
        }else {
            setIsLoading(false)
        }
          }, []) 
    

    return (
        <>
        <h1>Pinball Machine!</h1>
        <input type="text" id="name" required autoFocus className="form-control" placeholder="Pinball Machine Name" value={machine.name} onChange={handleControlledInputChange} />
        <input type="text" id="maker" required autoFocus className="form-control" placeholder="maker" value={machine.maker} onChange={handleControlledInputChange} />
        <input type="text" id="videoURL" required autoFocus className="form-control" placeholder="Video URL" value={machine.videoURL} onChange={handleControlledInputChange} />
         <button className="btn btn-primary" disabled={isLoading} onClick={event => {
                event.preventDefault()
                handleClickSaveMachine()
            }}>
                {machineId ? <>Edit Machine</> : <>Add Machine</>}
            </button>
        </>
    )

}