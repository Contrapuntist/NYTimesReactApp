import React from "react";

const Savebutton = props =>
  <button {...props} className="btn btn-success">
    {props.children}
  </button>;

export default Savebutton;