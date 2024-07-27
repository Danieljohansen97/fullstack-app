import React from 'react'
// Component imports
import Card from '../Card/Card'

// Style imports
import './CardList.css'

interface Props {}

const CardList = (props: Props) => {
  return (
    <div>
        <Card />
        <Card />
        <Card />
    </div>
  )
}

export default CardList