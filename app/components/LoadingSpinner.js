import React from "react";
import spinner from "../resources/images/spinner.svg";
const LoadingSpinner = ({ isSmall = false }) => {
  return (
    <img
      className={`image ${isSmall ? "is-64x64" : "is-96x96"}`}
      src={spinner}
    />
  );
};

export default LoadingSpinner;
