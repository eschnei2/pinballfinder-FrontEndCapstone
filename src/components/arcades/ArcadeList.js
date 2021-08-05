import React, { useContext, useEffect } from "react"
import { ArcadeContext } from "./ArcadeProvider"
import { ArcadeItem } from "./ArcadeItem"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid'
import { Container } from "@material-ui/core"
import pinballart from '../images/pinballart.jpg'



export const ArcadeList = () => {
  const { arcades, getArcades } = useContext(ArcadeContext)
  const history = useHistory();

  useEffect(() => {
    getArcades()
  }, [])

  return (
    <>
    <Grid container
        justifyContent="center" direction="column" alignItems="center">
    <img src={pinballart} width="600" height="300" />
    </Grid>
    <Grid container
        justifyContent="flex-start" direction="column" alignItems="flex-end">
    <Button variant="contained" color="primary" startIcon={<EditIcon />}
        onClick={() => {
            history.push(`/arcades/create`)
     }}>Add Arcade</Button>
     </Grid>
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