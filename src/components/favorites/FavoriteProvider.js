import React, { useState, createContext } from "react"

export const FavoriteContext = createContext()

export const FavoriteProvider = (props) => {
    const [favorites, setFavorites] = useState([])
    const [searchTerms, setSearchTerms] = useState("");

    const getFavoriteById = (id) => {
        return fetch(`http://localhost:8088/favorites/${id}?_expand=user&_expand=machine`).then((res) =>
            res.json()
        ) // note we don't set anything on state here. Why?
    }

     const getFavorites = () => {
        return fetch("http://localhost:8088/favorites?_expand=user&_expand=machine")
            .then((res) => res.json())
            .then(setFavorites)
    } 
    const addFavorite = (favoriteObj) => {
        return fetch("http://localhost:8088/favorites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(favoriteObj),
        }).then(getFavorites)
    }

    const updateFavorite = (favorite) => {
        return fetch(`http://localhost:8088/favorites/${favorite.id}?_expand=user&_expand=machine`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(favorite),
        }).then(getFavorites)
    }

    const removeFavorite = favoriteId => {
        return fetch(`http://localhost:8088/favorites/${favoriteId}?_expand=user&_expand=machine`, {
            method: "DELETE"
        })
            .then(getFavorites)
    }

    return (
        <FavoriteContext.Provider
            value={{
                favorites,
                getFavorites,
                addFavorite,
                getFavoriteById,
                updateFavorite,
                removeFavorite,
                searchTerms,
                setSearchTerms
            }}
        >
            {props.children}
        </FavoriteContext.Provider>
    )
}
