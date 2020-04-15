import React, { useState } from "react";
import "../index.less";
import PropTypes from "prop-types";
function AddComment({ addComment }) {
  const [commentText, setCommentText] = useState("");

  function onChange(event) {
    const name = event.target.name,
      value = event.target.value;
    if (name === "commentText") setCommentText(value.trim());
  }

  function onSubmit(event) {
    event.preventDefault();
    if (!commentText) {
      return;
    }
    addComment(commentText);
    setCommentText("");
  }

  function keydownHandler(event) {
    if (event.keyCode === 13 && event.ctrlKey) {
      onSubmit(event);
    }
  }
  return (
    <form className="commentForm" onSubmit={onSubmit} onKeyUp={keydownHandler}>
      <textarea
        className="commentInput"
        name="commentText"
        rows="3"
        value={commentText}
        onChange={onChange}
      />
      <button type="submit" className="submitButton">
        Написать консультанту
      </button>
    </form>
  );
}

AddComment.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default AddComment;
