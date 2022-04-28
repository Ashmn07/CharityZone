import React from 'react'
import {useLocation} from 'react-router-dom';

function Beneficiary() {
    const location = useLocation()
  return (
    <div>Hi {location.state.name} you are a beneficiary</div>
  )
}

export default Beneficiary