import React from 'react'
import Navbar from './Navbar'

const main = (props) => {
  return (
    <div>
        <Navbar/>
        {props.child}
    </div>
  )
}

export default main
