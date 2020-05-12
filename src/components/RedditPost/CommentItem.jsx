import React, { useCallback } from "react";
import moment from "moment";

import deleteIcon from "assets/deleteIcon.svg";
import styles from "./RedditPost.module.css";

const CommentItem = ({ comment, comments, deleteComment, className }) => {
  const { body, author, id, created_utc } = comment;

  const splitSelfText = body.split("\n\n");
  const postLines = splitSelfText.map((line, i) => (
    <p
      className={styles.postBodyLine}
      key={`body-line${i}`}
      id={`${id}-post-line-${i}`}
    >
      {line}
    </p>
  ));

  const createdOn = moment.unix(created_utc);
  const timeFrom = moment(createdOn).fromNow();

  const childComments = comments
    .filter((item) => item.parent_id === id)
    .sort((a, b) => b.created_utc - a.created_utc)
    .map((childComment) => (
      <CommentItem
        key={`child-comment-${childComment.id}`}
        comment={childComment}
        comments={comments}
        deleteComment={deleteComment}
      />
    ));

  const deleteFunction = useCallback(() => {
    deleteComment(id);
  }, [deleteComment, id]);

  const domId = `comment-item-${id}`;
  return (
    <div className={`${styles.column} ${className}`} id={domId}>
      <div className={styles.commentColumn}>
        <div className={styles.row}>
          {/** React throws a warning if there's an a tag without an href so they recommend using a button instead*/}
          <button className={styles.authorLink}>{author}</button>
          <span className={styles.fromNow}>- {timeFrom}</span>
          <button
            onClick={deleteFunction}
            className={styles.deleteButton}
            id={`${domId}-button`}
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
