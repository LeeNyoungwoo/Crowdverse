import React from "react";

const headerInfo = [{},{}]

const exampleEventList = [
	{
		key: 0,
		imageName : "./image.png",
		title: "",
		content: "",
	},
	{},
]
// class Perspective extends React.component {}

const Perspective = ({ match }) => {
  return (
    <div>
      <h2>{match.params.name}</h2>
    </div>
  );
};

export default Perspective;
