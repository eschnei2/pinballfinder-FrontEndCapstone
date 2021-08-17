import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { useParams, useHistory } from "react-router-dom"
import { ForumContext } from "./ForumProvider"
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ButtonGroup from '@material-ui/core/ButtonGroup'



export const ForumItem = ({ forum }) => {
    const { removeForum, addForum } = useContext(ForumContext)

    const {machineId} = useParams();
    const currentUserId = parseInt(sessionStorage.getItem("pinball_user"))
    const history = useHistory();

    const handleRemove = () => {
        removeForum(forum.id)
        .then(() => {
        })
    }

    let userButtons
    if(currentUserId === forum.userId) {
        userButtons = <>
        <ButtonGroup>
        <Button onClick={handleRemove} variant="contained" color="secondary" startIcon={<DeleteIcon />} size="small" >
            Delete Post
        </Button>
        <Button onClick={() => history.push(`/forums/edit/${forum.id}`)} variant="contained" color="primary" startIcon={<EditIcon />} size="small">
            Edit Post
        </Button>
        </ButtonGroup>
        </>
    }

    console.log(forum.user?.firstName)

    
    return(
    <>
    <section className="forum">
        {forum.text}
        {userButtons}
        <h6>by {forum.user?.firstName}</h6>
    </section>
    </>
)
}