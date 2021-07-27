import React from "react"


export const FavoriteItem = ({ favorite }) => (
    <>

    {console.log(favorite)}
    <section className="favorite">
        <h3 className="favorite__name">{favorite.machine?.name}</h3>
    </section>
    </>
)