import React, { SyntheticEvent } from "react";
import "./PortfolioList.css";
import PortfolioCard from "../PortfolioCard/PortfolioCard";

interface Props {
  portfolioValues: string[];
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const PortfolioList = ({ portfolioValues, onPortfolioDelete }: Props) => {
  return (
    <>
      <h3>My portfolio</h3>
      <ul>
        {portfolioValues &&
          portfolioValues.map((portfolioValue) => {
            return (
              <PortfolioCard
                portfolioValue={portfolioValue}
                onPortfolioDelete={onPortfolioDelete}
              />
            );
          })}
      </ul>
    </>
  );
};

export default PortfolioList;
