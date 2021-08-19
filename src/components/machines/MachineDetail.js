import React, { useContext, useEffect, useState } from "react"
import { MachineContext } from "./MachinesProvider"
import { useParams, useHistory } from "react-router-dom"
import ReactPlayer from "react-player"
import liked from '../images/liked.svg'
import notLiked from '../images/notLiked.svg'
import { FavoriteContext } from "../favorites/FavoriteProvider"
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid'
import { Container } from "@material-ui/core"
import spacecadet from '../images/pinballavant.jpg'

export const MachineDetail = () => {
    const { getMachineById, removeMachine } = useContext(MachineContext)
    const { removeFavorite, getFavorites, favorites, addFavorite } = useContext(FavoriteContext)

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

     const nLiked = <img id="test" class="actionIcon" src={liked} width ="50" onClick={handleFavRemove}  />
     const iLiked = <img id="test" class="actionIcon" src={notLiked} width ="50" onClick={handleAdd} />

     let handleLikes
     if (foundFavorite){
         handleLikes = nLiked
         } else {
          handleLikes = iLiked
         }
     
    let handleEdit
    let handleDelete
    if (currentUserId === machine.userId){
        handleEdit = <Button variant="contained" color="primary" startIcon={<EditIcon />}
        onClick={() => {
            history.push(`/machines/edit/${machine.id}`)
        }}>Edit machine</Button>
        handleDelete = <Button variant="contained" color="secondary" onClick={handleRemove} startIcon={<DeleteIcon />}>
        Delete Machine
        </Button>
    }



    return (
        <>
        <Grid container
        justifyContent="center" direction="column" alignItems="center">
        <img src={spacecadet} width="500" height="300" minheight="50" minwidth="75" />
        </Grid>
        <Grid container
        justifyContent="flex-start" direction="column" alignItems="flex-end">
        {handleEdit}
        {handleDelete}
        
        </Grid>
        <Grid container
            justifyContent="center"
            alignItems="center">
        <Grid item md={3}>
                <h1>{machine.name}</h1>
                <h3>made by {machine.maker}</h3>
        </Grid></Grid>
        <Container maxWidth="xxl">
        <Grid container
            justifyContent="center"
            alignItems="center">
            <Grid item md={1}>
                {handleLikes}
            </Grid>
            <Grid Item md={3}>
                <ReactPlayer url={machine.videoURL} />
            </Grid>
        </Grid>
        </Container>
        </>
    )
}