import React, { useContext, useEffect, useState } from "react"
import { ArcadeContext } from "./ArcadeProvider"
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import { ArcadeMachineContext } from "../arcademachine/ArcadeMachineProvider"
import { ArcadeAPI } from "./ArcadeAPI"
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid'
import { Container } from "@material-ui/core"
import pinballart from '../images/pinballart.jpg'
import pinballN from '../images/PinballN.jpg'
import Paper from '@material-ui/core/Paper';



const styles = {
    paperContainer: {
        backgroundImage: `url(${pinballN})`
    }
};

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
        handleEdit = <Button variant="contained" color="primary" startIcon={<EditIcon />} onClick={() => {
            history.push(`/arcades/edit/${arcade.id}`)
        }}>Edit Arcade</Button>
    }

    let handleAddMachine
    if( currentUserId === arcade.userId ) {
        handleAddMachine =
        <Button onClick={() => {
            history.push(`/arcades/addtolocation/${arcade.id}`)}} variant="contained" color="primary" startIcon={<EditIcon />} endIcon={<DeleteIcon />}>
            Add/Remove a machine
        </Button>
    }

    let handleDelete
    if(currentUserId === arcade.userId) {
        handleDelete =
        <Button onClick={handleRemove} variant="contained" color="secondary" startIcon={<DeleteIcon />}>
            delete arcade
        </Button>
    }

    let https = `https://www.google.com/maps/embed/v1/place?key=${ArcadeAPI}&q=${arcade.state}+${arcade.city},${arcade.street}`



    return (
    <>
    <Grid container
        justifyContent="center" direction="column" alignItems="center">
    <img src={pinballN} width="800" height="300" />
    </Grid>
    <Grid container
        justifyContent="flex-start" direction="column" alignItems="flex-end">
    {handleEdit}
    {handleDelete}
    </Grid>
    <Container maxWidth="xxl">
        <Grid container
            justifyContent="space-evenly"
            alignItems="center">
    <Grid Item md={3}>
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
    {handleAddMachine}
    </Grid>
    <Grid Item md={3}>
        <h1>{arcade.name}</h1>
        <h3>{arcade.street}</h3>
        <h3>{arcade.city}, {arcade.state}</h3>
        <h3>{arcade.zipcode}</h3>
    </Grid>
        <Grid Item md={3}>
        <iframe src={https} id="gameembed" class="iframegame" frameborder="0" width="300" height ="300"></iframe>
        </Grid>
    </Grid>
    </Container>
    </>
    )

}