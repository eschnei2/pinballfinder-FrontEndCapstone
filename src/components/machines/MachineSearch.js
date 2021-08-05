import React, { useContext } from "react"
import { MachineContext } from "./MachinesProvider"
import Grid from '@material-ui/core/Grid'
import spacecadet from '../images/spacecadet.png'

export const MachineSearch = () => {
  const { setSearchTerms } = useContext(MachineContext)

  return (
    <>

    <Grid container
        justifyContent="center" direction="column" alignItems="center">
    <img src={spacecadet} width="800" height="300" />
    </Grid>
      Pinball search:
      <input type="text"
        className="input--wide"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search for a pinball machine... " />
    </>
  )
}