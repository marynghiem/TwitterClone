import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from "./firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => setPosts(snapshot.docs.map((doc) => doc.data())));
  }, []);

  return (
    <div className="feed">
      <div className="feed_header">
        <h2>Home</h2>
        <TweetBox />
        {posts.map((post) => (
          <Post
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
        <Post
          displayName="Mary Nghiem"
          username="marynghiem46"
          verified={true}
          text="YAY its working"
          avatar="https://pbs.twimg.com/profile_images/1410504544023285764/YMszbSJy_400x400.jpg"
          image="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
        />
      </div>
    </div>
  );
};

export default Feed;
