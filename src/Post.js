import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

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
              <span>
                <VerifiedUserIcon className="post_badge" />
              </span>
            </h3>
          </div>
          <div className="post_header_descripter">
            <p>I challenge you to build a Twitter Clone</p>
          </div>
        </div>
        <img src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif" alt="" />
      </div>
    </div>
  );
};

export default Post;
