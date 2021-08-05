import React from "react"
import { Link } from "react-router-dom"


export const FavoriteItem = ({ favorite }) => (
    <>

    <h3>
    <Link to={`/machines/detail/${favorite.machineId}`}>
        {favorite.machine?.name}
    </Link>
    </h3>
    </>
)