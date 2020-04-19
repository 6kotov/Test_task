import React from "react";
import "../index.less";
import PropTypes from "prop-types";

function CommentItem({ item }) {
  return (
    <div>
      <div className="commentsType">
        <div className="defaultFont">{item.name}</div>
        <div className="commentTime">{item.date}</div>
      </div>
      <div className="commentText">{item.text}</div>
    </div>
  );
}

CommentItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CommentItem;
