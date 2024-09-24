import React from 'react'
import Icon from './assets/sun.png'
import './css/App.css'

function Head() {
  return (
    <div>
        <h1 className='Title'>I am a header</h1>
        <img src={Icon} width='200' height='200'/>
    </div>
  )
}

export default Head