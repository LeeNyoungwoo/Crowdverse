import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { BreadCrumbs, EventBoxList } from "pages/index.async.js";

import sample1 from './SampleImage1.jpg';
import sample2 from './SampleImage2.jpg';
import sample3 from './SampleImage3.jpg';

const headerInfo = [{},{}]

const exampleEventList = [
	{
		key: 0,
		imageName : sample1,
		title: "Peace treaty will be signed",
		content: "How a curmudgeonly worldview can be useful in the rambunctious world of technology?",
	},
	{
		key: 1,
		imageName : sample2,
		title: "Tax Increase",
		content: "How a curmudgeonly worldview can be useful",
	},
	{
		key: 2,
		imageName : sample3,
		title: "Vote Rate",
		content: "How a curmudgeonly worldview can be useful in the rambunctious world of technology",
	}
]
// class Perspective extends React.component {}

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

const Perspective = ({ match }) => {
  return (
    <div>
    	<BreadCrumbs />
      <EventBoxList
        eventList={exampleEventList}
      />
    </div>
  );
};

export default Perspective;