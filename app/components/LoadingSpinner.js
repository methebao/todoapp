import React from "react";
import spinner from "../resources/images/spinner.svg";
const LoadingSpinner = ({ isLoading }) => {
  return isLoading ? <img className={"image is-64x64"} src={spinner} /> : null;
};

export default LoadingSpinner;
