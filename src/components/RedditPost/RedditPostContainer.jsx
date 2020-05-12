import React, { PureComponent } from "react";
import { isEmpty } from "lodash";
import { getPost } from "api";
import RedditPost from "./RedditPost";
import loading from "assets/loading.gif";
import styles from "./RedditPost.module.css";

export default class RedditPostContainer extends PureComponent {
  constructor() {
    super();
    this.state = {
      post: {},
      isFetching: false,
      error: {
        isError: false,
        message: "",
      },
    };
  }

  async componentDidMount() {
    this.setState({ isFetching: true });
    try {
      await getPost().then((post) => {
        this.setState({ post, isFetching: false });
      });
    } catch (error) {
      const errorState = {
        isError: true,
        message: error,
      };
      this.setState({ error: errorState, isFetching: false });
    }
  }

  render() {
    const { isFetching, error, post } = this.state;
    const { isError, message } = error;
    if (isFetching || (isEmpty(post) && !isError)) {
      return <img src={loading} alt="loading" />;
    }

    if (isError) {
      return (
        <div className={styles.column}>
          <h1>There was an error, sorry</h1>
          <span>{`${message}`}</span>
        </div>
      );
    }

    return <RedditPost post={post} />;
  }
}
