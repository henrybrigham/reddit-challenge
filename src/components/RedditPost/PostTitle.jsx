import React from "react";
import { formatScore } from "utils";
import styles from "./RedditPost.module.css";

const PostTitle = ({ post }) => {
  const { score, title } = post;

  return (
    <div className={styles.titleRow}>
      <span className={styles.score}>{formatScore(`${score}`)}</span>
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default PostTitle;
