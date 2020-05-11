import React, { PureComponent } from "react";
import { isEmpty } from "lodash";
import { getPost } from "api";
import PostTitle from "./PostTitle";
import PostBody from "./PostBody";
import CommentsList from "./CommentsList";
import styles from "./RedditPost.module.css";

export default class RedditPost extends PureComponent {
  constructor() {
    super();
    this.state = {
      post: {},
      isFetching: false,
      error: false,
      comments: [],
    };
  }

  async componentDidMount() {
    this.setState({ isFetching: true });

    await getPost().then((post) => {
      this.setState({ post, isFetching: false });
    });
  }

  deleteComment = (id) => {
    const { comments } = this.state.post;
    const commentsToRemove = [];

    const findLineage = (id) => {
      const children = comments.filter((comment) => comment.parent_id === id);
      children.forEach((child) => commentsToRemove.push(child.id));

      if (children.length !== 0) {
        children.forEach((child) => findLineage(child.id));
      }
    };

    findLineage(id);

    const newComments = comments
      .filter((comment) => !commentsToRemove.includes(comment.id))
      .filter((nextComment) => nextComment.id !== id);

    const updatedPost = {
      ...this.state.post,
      comments: newComments,
    };
    this.setState({ post: updatedPost });
  };

  render() {
    const { isFetching, error, post, comments } = this.state;
    if (isFetching || isEmpty(post)) {
      return <h1>loading...</h1>;
    }

    if (error) {
      return <h1>There was an error, fuck</h1>;
    }

    const { subreddit_name_prefixed } = post;
    return (
      <div className={styles.postBackground}>
        <div className={styles.titleContainer}>
          <h3 className={styles.subRedditHeader}>{subreddit_name_prefixed}</h3>
          <PostTitle post={post} />
        </div>

        <div className={styles.postBuffer}>
          <div className={styles.column}>
            <PostBody post={post} comments={comments} />
            <CommentsList post={post} deleteComment={this.deleteComment} />
          </div>
        </div>
      </div>
    );
  }
}
