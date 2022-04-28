import React from 'react'
import {useLocation} from 'react-router-dom';

function Validator() {
    const location = useLocation()
  return (
    <div>Hi {location.state.name} you are a Validator</div>
  )
}

export default Validator