import React, { SyntheticEvent } from "react";
import "./PortfolioCard.css";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";

interface Props {
  portfolioValue: string;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const PortfolioCard = ({ portfolioValue, onPortfolioDelete }: Props) => {
  return (
    <>
      <h4>{portfolioValue}</h4>
      <DeletePortfolio onPortfolioDelete={onPortfolioDelete} portfolioValue={portfolioValue} />
    </>
  );
};

export default PortfolioCard;
