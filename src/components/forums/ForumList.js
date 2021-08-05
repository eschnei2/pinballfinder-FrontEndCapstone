import React, { useContext, useEffect, useState } from "react"
import { ForumContext } from "./ForumProvider"
import { ForumItem } from "./ForumItem"
import { useParams } from "react-router-dom"
import Button from '@material-ui/core/Button'
import Typography from "@material-ui/core/Typography"
import '@fontsource/roboto';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

export const ForumList = () => {
    const { forums, getForums, addForum} = useContext(ForumContext)

    const [body, setBody] = useState({
        text: ""
    })

    const bodyBlank = {
      text: ""
    }

    const {machineId} = useParams();
    const currentUserId = parseInt(sessionStorage.getItem("pinball_user"))

    useEffect(() => {
        getForums()
    }, [])

    
    const handleControlledInputChange = (event) => {
        const newBody = { ...body }
        newBody[event.target.id] = event.target.value
        setBody(newBody)
      }
      
    const handleAdd = () => {
        addForum({
            userId: currentUserId,
            machineId: parseInt(machineId),
            text: body.text
        })
        .then(() => setBody(bodyBlank))
    }

    return (
        <>
        <Typography variant="h4">Forum</Typography>
        <div className="forums">
          {
            forums.map(forum => {
            if (forum.machineId === parseInt(machineId)){
            return <ForumItem key={forum.id} forum={forum} />
          }})
          }
        </div>

        <input type="text"
        id="text"
        value ={body.text}
        onChange={handleControlledInputChange}
        className="input--wide"
        placeholder="make a post" />
        
        <Button onClick={handleAdd} variant="contained" color="primary" endIcon={<KeyboardArrowRightIcon />} size="medium">
            Create Post
        </Button>


        </>
      )

}