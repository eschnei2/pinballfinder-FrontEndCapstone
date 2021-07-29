import React, { useContext, useEffect, useState } from "react"
import { ForumContext } from "./ForumProvider"
import { ForumItem } from "./ForumItem"
import { useParams, useHistory } from "react-router-dom"

export const ForumList = () => {
    const { forums, getForums, addForum} = useContext(ForumContext)

    const [body, setBody] = useState({
        text: ""
    })

    const {machineId} = useParams();
    const currentUserId = parseInt(sessionStorage.getItem("pinball_user"))
    const history = useHistory();

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
        .then(() => history.push(`/machines/detail/${machineId}`))
    }


    return (
        <>
        <h3>Forum</h3>
        <div className="forums">
          {
            forums.map(forum => {
            if (forum.machineId === parseInt(machineId)){
            return <ForumItem key={forum.id} forum={forum} />
          }})
          }
        </div>
        <button onClick={handleAdd}>
            Create Post
        </button>
        <input type="text"
        id="text"
        value ={body.text}
        onChange={handleControlledInputChange}
        className="input--wide"
        placeholder="make a post" />
        </>
      )

}