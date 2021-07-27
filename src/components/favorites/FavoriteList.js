import React, { useContext, useEffect } from "react"
import { FavoriteContext } from "./FavoriteProvider"
import { FavoriteItem } from "./FavoriteItem"


export const FavoriteList = () => {
  const { favorites, getFavorites } = useContext(FavoriteContext)

  useEffect(() => {
    getFavorites()
  }, [])

  const currentUserId = parseInt(sessionStorage.getItem("pinball_user"))
 /*  console.log(favorites) */

  return (
    <>
    <h1>Favorites</h1>
    <div className="favorites">
      {
        favorites.map(favorite => {
          {/* {console.log(favorite.user?.firstName)} */}
          if(currentUserId === favorite.user?.userId){}
          return <FavoriteItem key={favorite.id} favorite={favorite} />
        })
      }
    </div>
    </>
  )
}