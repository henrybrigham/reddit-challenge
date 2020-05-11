import React, { useState } from "react";

import deleteIcon from "assets/deleteIcon.svg";
import styles from "./RedditPost.module.css";

const CommentItem = ({ comment, comments }) => {
  console.log("**comment", comment);
  const { body, author, id } = comment;

  const childComments = comments
    .filter((item) => item.parent_id === id)
    .map((childComment) => (
      <CommentItem comment={childComment} comments={comments} />
    ));

  return (
    <div className={styles.commentItem}>
      <h3>{body}</h3>
      {childComments}
    </div>
  );
};

export default CommentItem;
