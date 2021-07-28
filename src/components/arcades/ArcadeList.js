import React, { useContext, useEffect } from "react"
import { ArcadeContext } from "./ArcadeProvider"
import { ArcadeItem } from "./ArcadeItem"


export const ArcadeList = () => {
  const { arcades, getArcades } = useContext(ArcadeContext)

  useEffect(() => {
    getArcades()
  }, [])

  const currentUserId = parseInt(sessionStorage.getItem("pinball_user"))

  return (
    <>
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