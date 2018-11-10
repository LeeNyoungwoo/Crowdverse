import React from "react";
import Tabs from "./Tabs";

const Post = ({ match }) => {
  return (
    <div>
      <h2>Event {match.params.name}</h2>
      <Tabs match={match}/>
    </div>
  );
};

export default Post;
