import React from "react";

import './spinner.scss';

const Spinner = () => {
  return (
    <div className="spinner-border" role="status">
      <span className="sr-only"></span>
    </div>
  );
}

export default Spinner;
