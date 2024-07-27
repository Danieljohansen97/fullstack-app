import React from 'react'
import "./PortfolioList.css"
import PortfolioCard from '../PortfolioCard/PortfolioCard';

interface Props {
  portfolioValues: string[];
}

const PortfolioList = ({portfolioValues}: Props) => {
  return (
    <>
      <h3>My portfolio</h3>
      <ul>
        {portfolioValues &&
          portfolioValues.map((portfolioValue) => {
            return <PortfolioCard portfolioValue={portfolioValue} />;
          })
        }
      </ul>
    </>
  )
}

export default PortfolioList