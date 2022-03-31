import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Shared/Card'
import {Link} from 'react-router-dom'

function AboutPages(props) {
  return (

    <Card>
        <h1>Lorem, ipsum dolor.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, amet.</p>
        <p>Version: 1.0.0</p>
        <Link to='/'>Back Home</Link>
        
    </Card>
  )
}

AboutPages.propTypes = {}

export default AboutPages
