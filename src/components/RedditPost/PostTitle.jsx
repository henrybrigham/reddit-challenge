import React from "react";
import styles from "./RedditPost.module.css";

const PostTitle = ({ post }) => {
  const { score, title } = post;

  return (
    <div className={styles.titleRow}>
      <p>{score}</p>
      <p>{title}</p>
    </div>
  );
};

export default PostTitle;
