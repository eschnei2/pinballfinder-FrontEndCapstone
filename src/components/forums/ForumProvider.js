import React, { useState, createContext } from "react"

export const ForumContext = createContext()

export const ForumProvider = (props) => {
    const [forums, setForums ] = useState([])
    const [forumTexts, setForumTexts] = useState("")

    const getForums = () => {
        return fetch("http://localhost:8088/forums?_expand=user&_expand=machine")
        .then(response => response.json())
        .then(setForums)
    }

    const addForum = forumObj => {
        return fetch("http://localhost:8088/forums", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(forumObj),
        }).then(getForums)
    }

    const removeForum = id => {
        return fetch(`http://localhost:8088/forums/${id}`, {
            method: "DELETE"
        })
        .then(getForums)
    }

    const getForumById = id => {
        return fetch(`http://localhost:8088/forums/${id}?_expand=user&_expand=machine`)
        .then(response => response.json())
    }

    const updateForum = forum => {
        return fetch(`http://localhost:8088/forums/${forum.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(forum),
        }).then(getForums)
    }

    return (
        <ForumContext.Provider value={{
            forums, getForums, addForum, removeForum, getForumById, updateForum, forumTexts, setForumTexts
        }}>
            {props.children}
        </ForumContext.Provider>
    )
}