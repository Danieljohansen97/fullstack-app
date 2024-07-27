import React from 'react'
import "./PortfolioCard.css"

interface Props {
    portfolioValue: string;
}

const PortfolioCard = ({portfolioValue}: Props) => {
  return (
    <>
        <h4>{portfolioValue}</h4>
        <button>X</button>
    </>
  )
}

export default PortfolioCard