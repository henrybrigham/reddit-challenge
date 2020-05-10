import React, { PureComponent } from "react";
import { getPost } from "api";
import PostTitle from "./PostTitle";
import styles from "./RedditPost.module.css";

export default class RedditPost extends PureComponent {
  constructor() {
    super();
    this.state = {
      post: {},
      isFetching: false,
      error: false,
    };
  }

  async componentDidMount() {
    this.setState({ isFetching: true });

    await getPost().then((post) => {
      this.setState({ post, isFetching: false });
    });
  }

  render() {
    const { isFetching, error, post } = this.state;
    if (isFetching) {
      return <h1>loading...</h1>;
    }

    if (error) {
      return <h1>There was an error, fuck</h1>;
    }

    const { subreddit_name_prefixed } = post;
    return (
      <div className={styles.postBackground}>
        <div className={styles.postBuffer}>
          <h3 className={styles.subRedditHeader}>{subreddit_name_prefixed}</h3>
          <PostTitle post={post} />
        </div>
      </div>
    );
  }
}
