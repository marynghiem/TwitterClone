import React from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed_header">
        <h2>Home</h2>
        <TweetBox />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
