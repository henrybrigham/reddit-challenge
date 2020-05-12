import React, { useState, useCallback } from "react";
import PostTitle from "./PostTitle";
import PostBody from "./PostBody";
import CommentsList from "./CommentsList";
import styles from "./RedditPost.module.css";

const RedditPost = ({ post }) => {
  const [savedPost, setPost] = useState(post);

  const deleteComment = useCallback(
    (id) => {
      const commentsToRemove = [];

      const findLineage = (id) => {
        const children = savedPost.comments.filter(
          (comment) => comment.parent_id === id
        );
        children.forEach((child) => commentsToRemove.push(child.id));

        if (children.length !== 0) {
          children.forEach((child) => findLineage(child.id));
        }
      };

      findLineage(id);

      const newComments = savedPost.comments
        .filter((comment) => !commentsToRemove.includes(comment.id))
        .filter((nextComment) => nextComment.id !== id);

      const updatedPost = {
        ...savedPost,
        comments: newComments,
      };

      setPost(updatedPost);
    },
    [savedPost, setPost]
  );

  const { subreddit_name_prefixed, comments } = savedPost;
  return (
    <div className={styles.postBackground} id="reddit-post">
      <div className={styles.titleContainer}>
        <h3 className={styles.subRedditHeader}>{subreddit_name_prefixed}</h3>
        <PostTitle post={savedPost} />
      </div>
      <div className={styles.postBuffer}>
        <div className={styles.column}>
          <PostBody post={savedPost} comments={comments} />
          <CommentsList post={savedPost} deleteComment={deleteComment} />
        </div>
      </div>
    </div>
  );
};

export default RedditPost;
