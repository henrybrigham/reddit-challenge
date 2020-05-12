import React from "react";
import CommentItem from "./CommentItem";
import styles from "./RedditPost.module.css";

const CommentsList = ({ post, deleteComment }) => {
  const { comments } = post;

  const childComments = comments
    .filter((comment) => !comment.parent_id)
    .sort((a, b) => b.created_utc - a.created_utc)
    .map((topLevelComment) => (
      <CommentItem
        key={`child-comment-${topLevelComment.id}`}
        comment={topLevelComment}
        comments={comments}
        deleteComment={deleteComment}
        className={styles.topLevelComment}
      />
    ));

  return <div className={styles.commentList}>{childComments}</div>;
};

export default CommentsList;
