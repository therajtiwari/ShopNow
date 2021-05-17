import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spinner
        animation="border"
        role="status"
        style={{ width: "50px", height: "50px" }}
        variant="dark"
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
