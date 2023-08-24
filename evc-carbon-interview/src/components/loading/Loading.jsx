import React from "react";
import Spinner from "../../img/spinner.gif";

export const Loading = () => {
  return (
    <div>
      <img src={Spinner} alt="loading" width="10%" />
    </div>
  );
};
