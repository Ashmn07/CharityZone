import React from 'react'
import {useLocation} from 'react-router-dom';

function Donor() {
    const location = useLocation()
  return (
    <div>Hi {location.state.name} you are a Donor</div>
  )
}

export default Donor