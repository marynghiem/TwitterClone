import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import db from "./firebase";
import "./TweetBox.css";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Mary Nghiem",
      username: "marynghiem46",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://pbs.twimg.com/profile_images/1410504544023285764/YMszbSJy_400x400.jpg",
    });
    setTweetMessage("");
    setTweetImage("");
  };

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
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweet_box_image_input"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button onClick={sendTweet} type="submit" className="tweet_box_tweet_button">
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
