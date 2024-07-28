import React from "react";
import "./DesignPage.css";
import Table from "../../Components/Table/Table";

interface Props {}

const DesignPage = (props: Props) => {
  return (
    <>
      <h1>Design Page</h1>
      <h2>
        This is the design page. This is where we will house various design
        aspects of the app.
      </h2>
      <Table />
    </>
  );
};

export default DesignPage;
