import React from "react";
import moment from "moment";

import deleteIcon from "assets/deleteIcon.svg";
import styles from "./RedditPost.module.css";

const CommentItem = ({ comment, comments, deleteComment }) => {
  const { body, author, id, created_utc } = comment;

  const splitSelfText = body.split("\n\n");

  const postLines = splitSelfText.map((line, i) => {
    return (
      <p className={styles.postBodyLine} key={`body-line${i}`}>
        {line}
      </p>
    );
  });

  const createdOn = moment.unix(created_utc);
  const timeFrom = moment(createdOn).fromNow();

  console.log("*timeFrom", timeFrom);
  const childComments = comments
    .filter((item) => item.parent_id === id)
    .sort((a, b) => a.created_utc - b.created_utc)
    .map((childComment) => (
      <CommentItem
        comment={childComment}
        comments={comments}
        deleteComment={deleteComment}
      />
    ));

  return (
    <div className={styles.commentItem}>
      <div className={styles.commentColumn}>
        <div className={styles.row}>
          {/** React throws a warning if there's an a tag without an href so they recommend using a button instead*/}
          <button className={styles.authorLink}>{author}</button>
          <span className={styles.fromNow}>{timeFrom}</span>
          <button
            onClick={() => deleteComment(id)}
            className={styles.deleteButton}
          >
            <img src={deleteIcon} alt="delete icon" />
          </button>
        </div>

        <span className={styles.commentBody}>{postLines}</span>
      </div>

      {childComments.length > 0 ? (
        <div className={styles.childComments}>{childComments}</div>
      ) : null}
    </div>
  );
};

export default CommentItem;
