import React from "react";

import deleteIcon from "assets/deleteIcon.svg";
import styles from "./RedditPost.module.css";

const CommentItem = ({ comment, comments, deleteComment }) => {
  const { body, author, id } = comment;

  const childComments = comments
    .filter((item) => item.parent_id === id)
    .map((childComment) => (
      <CommentItem
        comment={childComment}
        comments={comments}
        deleteComment={deleteComment}
      />
    ));

  return (
    <div className={styles.commentItem}>
      <div className={styles.column}>
        <div className={styles.row}>
          <a className={styles.authorLink}>{author}</a>
          <button onClick={() => deleteComment(id)} className={styles.button}>
            <img
              src={deleteIcon}
              alt="delete icon"
              className={styles.deleteIcon}
            />
          </button>
        </div>

        <span className={styles.commentBody}>{body}</span>
      </div>
      {childComments.length > 0 ? (
        <div className={styles.childComments}>{childComments}</div>
      ) : null}
    </div>
  );
};

export default CommentItem;
