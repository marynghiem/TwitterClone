import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

const Post = ({ displayName, username, verified, timestamp, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar src="" />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_header_text">
            <h3>
              Mary Nghiem{" "}
              <span className="post_header_special">
                <VerifiedUserIcon className="post_badge" />
              </span>
            </h3>
          </div>
          <div className="post_header_description">
            <p>I challenge you to build a Twitter Clone</p>
          </div>
        </div>
        <img src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif" alt="" />
      </div>
      <div className="post_footer">
        <ChatBubbleOutlineIcon fontSize="small" />
        <RepeatIcon fontSize="small" />
        <FavoriteBorderIcon fontSize="small" />
        <PublishIcon fontSize="small" />
      </div>
    </div>
  );
};

export default Post;
