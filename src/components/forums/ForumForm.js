import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { ForumContext } from "./ForumProvider"
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit';

export const ForumForm = () => {
    const currentUserId = parseInt(sessionStorage.getItem("pinball_user"))
    const { addForum, getForumById, updateForum } = useContext(ForumContext)

    const [forum, setForum] = useState({})

    const {forumId} = useParams()
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newForum = { ...forum }
        newForum[event.target.id] = event.target.value
        setForum(newForum)
    }

    useEffect(() => {
        getForumById(forumId)
        .then((forum) => {
          setForum(forum)
          })
          }, []) 

    const handleUpdate = () => {
     updateForum({
        id: parseInt(forumId),
        text: forum.text,
        userId: currentUserId,
        machineId: forum.machineId
    }) 
     .then(() => history.push(`/machines/detail/${forum.machineId}`))}

    return (
        <>
        <input type="text"
        id="text"
        className="input--wide"
        placeholder="make a post"
        onChange={handleControlledInputChange}
        value={forum.text} />
        <Button onClick={event => {
            event.preventDefault()
            handleUpdate()}} variant="contained" color="primary" startIcon={<EditIcon />} size="small">
            Update Post
        </Button>
        </>
        
    )

}