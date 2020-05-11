import React from "react";
import commentIcon from "assets/commentIcon.svg";
import styles from "./RedditPost.module.css";

const PostBody = ({ post }) => {
  const { selftext } = post;
  const splitSelfText = selftext.split("\n\n");
  const postLines = splitSelfText.map((line, i) => {
    return (
      <p className={styles.postBodyLine} key={`body-line${i}`}>
        {line}
      </p>
    );
  });
  console.log("Split", splitSelfText);
  const { comments } = post;

  return (
    <div className={styles.postBody}>
      <div className={styles.postContent}>{postLines}</div>
      <div>
        <img
          src={commentIcon}
          alt="comment icon"
          className={styles.commentIcon}
        />
        <span className={styles.commentsLenght}>
          {comments.length} comments
        </span>
      </div>
    </div>
  );
};

export default PostBody;
