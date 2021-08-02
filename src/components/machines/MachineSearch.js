import React, { useContext } from "react"
import { MachineContext } from "./MachinesProvider"

export const MachineSearch = () => {
  const { setSearchTerms } = useContext(MachineContext)

  return (
    <>
      Pinball search:
      <input type="text"
        className="input--wide"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search for a pinball machine... " />
    </>
  )
}