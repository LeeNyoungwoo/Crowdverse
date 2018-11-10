import React from "react";

const Perspective = ({ match }) => {
  return (
    <div>
      <h2>{match.params.name}</h2>
    </div>
  );
};

export default Perspective;
