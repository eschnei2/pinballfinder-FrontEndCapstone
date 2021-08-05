import { useHistory, useParams } from 'react-router-dom'
import { ArcadeContext } from './ArcadeProvider'
import React, { useContext, useEffect, useState } from "react"
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit';

export const ArcadeForm = () => {
    const { addArcade, updateArcade, getArcadeById} = useContext(ArcadeContext)


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
                    city: arcade.city,
                    userId: currentUserId
                })
                .then(() => history.push(`/arcades/detail/${arcade.id}`))
            } else {
                addArcade({
                    name: arcade.name,
                    street: arcade.street,
                    state: arcade.state,
                    zipcode: arcade.zipcode,
                    city: arcade.city,
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
        <div>
        <input type="text" id="name" required autoFocus className="form-control" placeholder="Arcade Name" value={arcade.name} onChange={handleControlledInputChange} />
        </div>
        <div>
        <input type="text" id="street" required autoFocus className="form-control" placeholder="street" value={arcade.street} onChange={handleControlledInputChange} />
        </div>
        <div></div>
        <input type="text" id="city" required autoFocus className="form-control" placeholder="city" value={arcade.city} onChange={handleControlledInputChange} />
        <div></div>
        <input type="text" id="state" required autoFocus className="form-control" placeholder="State" value={arcade.state} onChange={handleControlledInputChange} />
        <div></div>
        <input type="text" id="zipcode" required autoFocus className="form-control" placeholder="zipcode" value={arcade.zipcode} onChange={handleControlledInputChange} />
         <Button className="btn btn-primary" disabled={isLoading} variant="contained" color="primary" startIcon={<EditIcon />} onClick={event => {
                event.preventDefault()
                handleClickSaveArcade()
            }}>
                {arcadeId ? <>Edit arcade</> : <>Add arcade</>}
            </Button>
        </>
    )

}