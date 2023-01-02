import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./TweetBox.css";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  return (
    <div className="tweet_box">
      <form>
        <div className="tweet_box_input">
          <Avatar src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmobile.twitter.com%2Fmary_nghiem&psig=AOvVaw0DqWJ-6xMS70sqIFxWOl75&ust=1671167723408000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJja_4Xv-vsCFQAAAAAdAAAAABAE" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input className="tweet_box_image_input" placeholder="Optional: Enter image URL" type="text" />
        <Button className="tweet_box_tweet_button">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
