import React from "react";
import "../index.less";
import PropTypes from "prop-types";
import CommentItem from "./commentItem";
import { MdModeComment, MdFavorite } from "react-icons/md";

function Comments({ commentsList }) {
  return (
    <div className="Comments">
      <div className="commentsTitle">
        <div className="commentsType">
          <div className="last">Последние отзывы</div>
          <div className="allComments">Все отзывы</div>
        </div>
        <div className="commentsRate">
          <div className="rate">
            {" "}
            <MdFavorite className="icon" color="#73b4d5" /> 131
          </div>
          <div className="rate">
            <MdModeComment className="icon" color="#73b4d5" /> 14
          </div>
        </div>
      </div>
      {commentsList.map((commentItem, index) => {
        return <CommentItem key={index} item={commentItem} />;
      })}
    </div>
  );
}

Comments.propTypes = {
  commentsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Comments;
