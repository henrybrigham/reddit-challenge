import React, { useState } from "react";
import CommentItem from "./CommentItem";
import styles from "./RedditPost.module.css";

const CommentsList = ({ post }) => {
  const { comments } = post;
  const [commentList, setCommentHash] = useState(comments);

  const childComments = commentList
    .filter((comment) => !comment.parent_id)
    .map((topLevelComment) => (
      <CommentItem comment={topLevelComment} comments={commentList} />
    ));

  return <div className={styles.postBody}>{childComments}</div>;
};

export default CommentsList;
