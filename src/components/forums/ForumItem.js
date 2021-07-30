import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { useParams, useHistory } from "react-router-dom"
import { ForumContext } from "./ForumProvider"



export const ForumItem = ({ forum }) => {
    const { removeForum, addForum } = useContext(ForumContext)

    const {machineId} = useParams();
    const currentUserId = parseInt(sessionStorage.getItem("pinball_user"))
    const history = useHistory();

    const handleRemove = () => {
        removeForum(forum.id)
        .then(() => {
            /* history.push("/machines") */
        })
    }

    let userButtons
    if(currentUserId === forum.userId) {
        userButtons = <>
        <button onClick={handleRemove}>
            Delete Post
        </button>
        <button onClick={() => history.push(`/forums/edit/${forum.id}`)}>
            Edit Post
        </button>
        </>
    }

    
    return(
    <>
    <section className="forum">
        <h6 className="forum__name">
        {forum.text}
        </h6>
        {userButtons}
    </section>
    </>
)
}