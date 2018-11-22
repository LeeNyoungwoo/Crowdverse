import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { BreadCrumbs, EventBoxList, Header } from "pages/index.async.js";
import { Link } from "react-router-dom";

import eraofnowar from "./eraofnowar.jpg";
import brexit from "./brexit.jpg";
import metoo from "./metoo.png";
import refugee from "./refugee.jpg";
import british from "./british.jpg";
import BTS from "./BTS.png";

const headerInfo = [{}, {}];

const politicalEventList = [
  {
    key: 0,
    imageName: eraofnowar,
    title: "‘Era of no war’ is coming",
    content:
      "South and North Korea commit to ‘era of no war’. South Korean President Moon Jae-in said “the era of no war” between the North and South has begun after he signed a joint statement with North Korean leader Kim Jong Un. At their third summit this year, Moon and Kim signed a joint statement in Pyongyang where the North Korean leader vowed to dismantle a nuclear test and launch site in the presence of “international experts.”"
  },
  {
    key: 1,
    imageName: brexit,
    title: "Brexit negotiations",
    content:
      "The Brexit negotiations are the negotiations currently taking place between the United Kingdom and the European Union for the prospective withdrawal of the United Kingdom from the European Union, following the UK's referendum on EU membership in June 2016. The scope of the negotiations could include the withdrawal agreement, a temporary transitional period agreement and another agreement for the post-transitional period. Brexit negotiation might also need to address Free Trade Agreement treaties between the European Union and its members (including the UK) for one part and third countries for the other part, and the tariff-rate quota, which might be split or renegotiated."
  }
];

const socialEventList = [
  {
    key: 0,
    imageName: refugee,
    title: "Refugee crisis",
    content:
      "These days, problem of refugee is becoming big issue worldwide. Refugee crisis can refer to movements of large groups of displaced people, who could be either internally displaced persons, refugees or other migrants. It can also refer to incidents in the country of origin or departure, to large problems whilst on the move or even after arrival in a safe country that involve large groups of displaced persons, asylum seekers or refugees. According to the UN High Commissioner for Refugees, in 2017, 65.6 million people were forcibly displaced worldwide because of persecution, conflict, violence, or human rights violations alone."
  },
  {
    key: 1,
    imageName: metoo,
    title: "Me Too movement",
    content:
      "The Me Too movement (or #MeToo movement), with many local and international alternatives, is a movement against sexual harassment and sexual assault. #MeToo spread virally in October 2017 as a hashtag used on social media in an attempt to demonstrate the widespread prevalence of sexual assault and harassment, especially in the workplace."
  }
];

const cultureEventList = [
  {
    key: 0,
    imageName: BTS,
    title: "BTS deliver a speech in UN",
    content:
      "Leader of the seven-member boy band Kim Nam Joon spoke Monday on the importance of believing in yourself and not yielding to social pressure. His bandmates, dressed in somber suits rather than their typical flashy costumes, backed up his impassioned plea."
  },
  {
    key: 1,
    imageName: british,
    title: "The British Museum’s ‘Looting’ Problem",
    content:
      "The venerable museum has 'given back' some stolen Iraqi antiquities, but that does not mean it's ready to atone for its colonial-era sins."
  }
];

class Perspective extends Component {
  returnBreadCrumb = category => {
    return (
      <div class="breadBox">
        <div class="breadText">
          > <Link to="/">Home</Link> > {`${category}`}
        </div>
      </div>
    );
  };

  returnEventListOfThisCategory = category => {
    if (category === "Politics") {
      return politicalEventList;
    }
    if (category === "Social") {
      return socialEventList;
    }
    if (category === "Culture") {
      return cultureEventList;
    }
  };

  render() {
    const { match } = this.props;
    const category = match.params.name;
    return (
      <div>
        <Header />
        <BreadCrumbs breadCrumbs={this.returnBreadCrumb(category)} category={category} />
        <EventBoxList
					eventList={this.returnEventListOfThisCategory(category)}
        />
      </div>
    );
  }
}

export default Perspective;
