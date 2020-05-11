import React from "react";
import CommentItem from "./CommentItem";
import styles from "./RedditPost.module.css";

const CommentsList = ({ post, deleteComment }) => {
  const { comments } = post;
  const childComments = comments
    .filter((comment) => !comment.parent_id)
    .sort((a, b) => a.created_utc - b.created_utc)
    .map((topLevelComment) => (
      <CommentItem
        comment={topLevelComment}
        comments={comments}
        deleteComment={deleteComment}
      />
    ));

  return <div className={styles.commentList}>{childComments}</div>;
};

export default CommentsList;
