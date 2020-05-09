import React, { PureComponent } from "react";
import { getPost } from "api";

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
    console.log("**post", post);
    return (
      <div>
        <h1>fuck yeah les go</h1>
        <h3>{JSON.stringify(post)}</h3>
      </div>
    );
  }
}

// export default RedditPost;
