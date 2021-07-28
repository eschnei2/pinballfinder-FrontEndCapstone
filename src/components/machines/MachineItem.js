import React from "react"
import { Link } from "react-router-dom"


export const MachineItem = ({ machine }) => (
    <>
    <section className="machine">
        <h3 className="machine__name">
        <Link to={`/machines/detail/${machine.id}`}>
        {machine.name}
        </Link></h3>
    </section>
    </>
)