import { useHistory, useParams } from 'react-router-dom'
import { ArcadeContext } from './ArcadeProvider'
import React, { useContext, useEffect, useState } from "react"

export const ArcadeForm = () => {
    const { addArcade, updateArcade, getArcadeById, getArcade} = useContext(ArcadeContext)


    const currentUserId = parseInt(sessionStorage.getItem("pinball_user"))

    const [arcade, setArcade] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const history = useHistory()
    const {arcadeId} = useParams()

    const handleControlledInputChange = (event) => {
        const newArcade = { ...arcade }
        newArcade[event.target.id] = event.target.value
        setArcade(newArcade)
    }

    const handleClickSaveArcade = () => {
        if (parseInt(arcade.locationId) === 0 || arcade.name === ""){
            window.alert("Please fill out the form completely")
        } else {
            setIsLoading(true)
            if (arcadeId) {
                updateArcade({
                    id: arcade.id,
                    name: arcade.name,
                    street: arcade.street,
                    state: arcade.state,
                    zipcode: arcade.zipcode,
                    userId: currentUserId
                })
                .then(() => history.push(`/arcades/detail/${arcade.id}`))
            } else {
                addArcade({
                    name: arcade.name,
                    street: arcade.street,
                    state: arcade.state,
                    zipcode: arcade.zipcode,
                    userId: currentUserId
                })
                .then(() => history.push(`/arcades`))
            }
        }
    }

    useEffect(() => {
        if (arcadeId){
        getArcadeById(arcadeId)
        .then((arcade) => {
          setArcade(arcade)
          setIsLoading(false)
          })
        }else {
            setIsLoading(false)
        }
          }, []) 
    

    return (
        <>
        <h1>Pinball arcade!</h1>
        <input type="text" id="name" required autoFocus className="form-control" placeholder="Arcade Name" value={arcade.name} onChange={handleControlledInputChange} />
        <input type="text" id="street" required autoFocus className="form-control" placeholder="street" value={arcade.street} onChange={handleControlledInputChange} />
        <input type="text" id="state" required autoFocus className="form-control" placeholder="State" value={arcade.state} onChange={handleControlledInputChange} />
        <input type="text" id="zipcode" required autoFocus className="form-control" placeholder="zipcode" value={arcade.zipcode} onChange={handleControlledInputChange} />
         <button className="btn btn-primary" disabled={isLoading} onClick={event => {
                event.preventDefault()
                handleClickSaveArcade()
            }}>
                {arcadeId ? <>Edit arcade</> : <>Add arcade</>}
            </button>
        </>
    )

}