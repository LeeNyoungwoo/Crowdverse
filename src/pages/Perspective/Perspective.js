import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { BreadCrumbs, EventBoxList, AddModal, ContentModal } from "pages/index.async.js";

import eraofnowar from './eraofnowar.jpg';
import brexit from './brexit.jpg';
import metoo from './metoo.png';
import refugee from './refugee.jpg';

const headerInfo = [{},{}]

const politicalEventList = [
	{
		key: 0,
		imageName : eraofnowar,
		title: "‘Era of no war’ is coming",
		content: "South and North Korea commit to ‘era of no war’. South Korean President Moon Jae-in said “the era of no war” between the North and South has begun after he signed a joint statement with North Korean leader Kim Jong Un. At their third summit this year, Moon and Kim signed a joint statement in Pyongyang where the North Korean leader vowed to dismantle a nuclear test and launch site in the presence of “international experts.”",
	},
	{
		key: 1,
		imageName : brexit,
		title: "Brexit negotiations",
		content: "The Brexit negotiations are the negotiations currently taking place between the United Kingdom and the European Union for the prospective withdrawal of the United Kingdom from the European Union, following the UK's referendum on EU membership in June 2016. The scope of the negotiations could include the withdrawal agreement, a temporary transitional period agreement and another agreement for the post-transitional period. Brexit negotiation might also need to address Free Trade Agreement treaties between the European Union and its members (including the UK) for one part and third countries for the other part, and the tariff-rate quota, which might be split or renegotiated.",
	},
]

const Perspective = ({ match }) => {
  return (
    <div>
    	<ContentModal />
    	<AddModal />
    	<BreadCrumbs />
      <EventBoxList
        eventList={politicalEventList}
      />
    </div>
  );
};

export default Perspective;