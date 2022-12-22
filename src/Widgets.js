import React from "react";
import "./Widgets.css";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";
const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_search_icon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets_widget_container">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"858551177860055040"} />
      </div>
    </div>
  );
};

export default Widgets;
