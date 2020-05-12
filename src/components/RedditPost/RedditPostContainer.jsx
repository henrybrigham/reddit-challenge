import React, { PureComponent } from "react";
import { isEmpty } from "lodash";
import { getPost } from "api";
import RedditPost from "./RedditPost";
import loading from "assets/loading.gif";

export default class RedditPostContainer extends PureComponent {
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
    try {
      await getPost().then((post) => {
        this.setState({ post, isFetching: false });
      });
    } catch (error) {
      this.setState({ error: true, isFetching: false });
    }
  }

  render() {
    const { isFetching, error, post } = this.state;
    if (isFetching || (isEmpty(post) && !error)) {
      return <img src={loading} alt="loading" />;
    }

    if (error) {
      return <h1>There was an error, sorry</h1>;
    }

    return <RedditPost post={post} />;
  }
}
