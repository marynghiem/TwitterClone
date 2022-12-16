import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./TweetBox.css";

const TweetBox = () => {
  return (
    <div className="tweet_box">
      <form>
        <div className="tweet_box_input">
          <Avatar src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmobile.twitter.com%2Fmary_nghiem&psig=AOvVaw0DqWJ-6xMS70sqIFxWOl75&ust=1671167723408000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJja_4Xv-vsCFQAAAAAdAAAAABAE" />
          <input placeholder="What's happening?" type="text" />
          <input placeholder="Enter image URL" type="text" />
        </div>
        <Button>Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
