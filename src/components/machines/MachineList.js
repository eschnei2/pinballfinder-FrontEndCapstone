import React, { useContext, useEffect, useState } from "react"
import { MachineContext } from "./MachinesProvider"
import { MachineItem } from "./MachineItem"
import { Link } from "react-router-dom"
import {  useHistory } from "react-router-dom"
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid'
import { Container } from "@material-ui/core"
import spacecadet from '../images/spacecadet.png'


export const MachineList = () => {
  const { machines, getMachines, searchTerms } = useContext(MachineContext)

  const [ filteredMachines, setFiltered ] = useState([])
  const history = useHistory();

  useEffect(() => {
    if (searchTerms !== "") {
      const subset = machines.filter(machine => machine.name.toLowerCase().includes(searchTerms.toLowerCase()))
      setFiltered(subset)
    } else {
      setFiltered(machines)
    }
  }, [searchTerms, machines])

  useEffect(() => {
    getMachines()
  }, [])

  return (
    <>
    <Grid container
        justifyContent="flex-start" direction="column" alignItems="flex-end">
    <Button variant="contained" color="primary" startIcon={<EditIcon />}
        onClick={() => {
            history.push(`/machines/create`)
        }}>Add pinball machine</Button>
      </Grid>
    
    <h1>Pinball Machines</h1>
    <div className="machines">
      {
        filteredMachines.map(machine => {
        return <MachineItem key={machine.id} machine={machine} />
        })
      }
    </div>
    </>
  )
}