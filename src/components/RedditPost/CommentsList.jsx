import React, { useState, useCallback } from "react";
import CommentItem from "./CommentItem";
import styles from "./RedditPost.module.css";

const CommentsList = ({ post }) => {
  const { comments } = post;
  const [commentList, setCommentList] = useState(comments);

  const deleteComment = useCallback(
    (id) => {
      const newCommentList = commentList.filter((comment) => comment.id !== id);
      setCommentList(newCommentList);
    },
    [commentList, setCommentList]
  );

  const childComments = commentList
    .filter((comment) => !comment.parent_id)
    .map((topLevelComment) => (
      <CommentItem
        comment={topLevelComment}
        comments={commentList}
        deleteComment={deleteComment}
      />
    ));

  return <div className={styles.commentList}>{childComments}</div>;
};

export default CommentsList;
