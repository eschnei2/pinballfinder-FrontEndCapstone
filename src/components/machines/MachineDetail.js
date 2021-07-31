import React, { useContext, useEffect, useState } from "react"
import { MachineContext } from "./MachinesProvider"
import { useParams, useHistory } from "react-router-dom"
import ReactPlayer from "react-player"
import liked from '../images/liked.svg'
import notLiked from '../images/notLiked.svg'
import { FavoriteContext } from "../favorites/FavoriteProvider"

export const MachineDetail = () => {
    const { getMachineById, removeMachine } = useContext(MachineContext)
    const { getFavoriteById, removeFavorite, getFavorites, favorites, addFavorite } = useContext(FavoriteContext)

    const[machine, setMachine] = useState({})

    const {machineId} = useParams();
    const history = useHistory();
    const currentUserId = parseInt(sessionStorage.getItem("pinball_user"))

     const handleRemove = () => {
        removeMachine(machineId)
        .then(() => {
            history.push("/machines")
        })
    } 

     useEffect(() => {
        getMachineById(machineId)
        .then((response) => {
            setMachine(response)
        })
    }, []) 

    const handleFavRemove = () => {
        removeFavorite(foundFavorite)
        .then(() => {
        })
    } 

    const handleAdd = () => {
        addFavorite({
            userId: currentUserId,
            machineId: parseInt(machineId)
        })
    }


    useEffect(() => {
        getFavorites()
      }, [])
    

    let findFavorite = favorites.find(favorite => favorite.userId === currentUserId  &&  favorite.machineId === parseInt(machineId))
    let foundFavorite = findFavorite?.id
    console.log(machine.id)

     const nLiked = <img id="test" class="actionIcon" src={liked} width ="50" onClick={handleFavRemove}  />
     const iLiked = <img id="test" class="actionIcon" src={notLiked} width ="50" onClick={handleAdd} />

     let handleLikes
     if (foundFavorite){
         handleLikes = nLiked
         } else {
          handleLikes = iLiked
         }
     
    let handleEdit
    if (currentUserId === machine.userId){
        handleEdit = <button onClick={() => {
            history.push(`/machines/edit/${machine.id}`)
        }}>Edit machine</button>
    }



    return (
        <>
        {handleEdit}
        <h1>{machine.name}</h1>
        <ReactPlayer url={machine.videoURL} />
        <button onClick={handleRemove}>
            Delete
        </button>
        {handleLikes}


        </>
    )
}