import React from 'react'
import "./Card.css"

type Props = {}

const Card = (props: Props) => {
  return (
    <div className='card'>
        <img 
        src='https://images.unsplash.com/photo-1713959925337-3a79df64fccd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='Image'
        />
        <div className='details'>
            <h2>AAPL</h2>
            <p>$110</p>
        </div>
        <p className='info'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, tempore!</p>
    </div>
  )
}

export default Card