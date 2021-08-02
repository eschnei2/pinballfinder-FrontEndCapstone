import React, { useContext, useEffect } from "react"
import { ArcadeContext } from "./ArcadeProvider"
import { ArcadeItem } from "./ArcadeItem"
import { Link } from "react-router-dom"


export const ArcadeList = () => {
  const { arcades, getArcades } = useContext(ArcadeContext)

  useEffect(() => {
    getArcades()
  }, [])

  const currentUserId = parseInt(sessionStorage.getItem("pinball_user"))



  return (
    <>
    <Link className="nav-link" to="/arcades/create">
          Add an Arcade
    </Link>
    <h1>Arcades</h1>
    
    <div className="arcades">
      {
        arcades.map(arcade => {
        return <ArcadeItem key={arcade.id} arcade={arcade} />
        })
      }
    </div>
    </>
  )
}