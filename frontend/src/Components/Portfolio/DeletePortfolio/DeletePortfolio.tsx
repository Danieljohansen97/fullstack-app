import React, { SyntheticEvent } from 'react'
import "./DeletePortfolio.css"

interface Props {
    onPortfolioDelete: (e: SyntheticEvent) => void;
    portfolioValue: string;
}

const DeletePortfolio = ({ onPortfolioDelete, portfolioValue }: Props) => {
  return (
    <div>
        <form onSubmit={onPortfolioDelete}>
            <input hidden={true} value={portfolioValue} />
            <button>X</button>
        </form>
    </div>
  )
}

export default DeletePortfolio