import React from "react"
import { Link } from "react-router-dom"


export const ArcadeItem = ({ arcade }) => (
    <>
    <section className="arcade">
        <h3 className="arcade__name">
        <Link to={`/arcades/detail/${arcade.id}`}>
        {arcade.name}
        </Link></h3>
    </section>
    </>
)