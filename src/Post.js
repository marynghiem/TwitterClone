import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";

const Post = ({ displayName, username, verified, timestamp, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar src="" />
      </div>
    </div>
  );
};

export default Post;
