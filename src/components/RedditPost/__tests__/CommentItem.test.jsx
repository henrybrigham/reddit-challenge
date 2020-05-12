import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import CommentItem from "../CommentItem";

const id = "t1_f35nn9e";
const deleteComment = jest.fn();
const PROPS = {
  comment: {
    created_utc: 1570683149,
    subreddit_name_prefixed: "r/unpopularopinion",
    subreddit: "unpopularopinion",
    depth: 0,
    permalink:
      "/r/unpopularopinion/comments/dfqxf8/taking_showers_with_your_socks_on_is_so_much/f35nn9e/",
    body_html:
      '&lt;div class="md"&gt;&lt;p&gt;97% Disagree it&amp;#39;s the most unpopular opinion I&amp;#39;ve seen here after that guy who wanted to be pregnant&lt;/p&gt;\n&lt;/div&gt;',
    downs: 0,
    body:
      "I'm gonna try this tonight op, and if it's shit I will come for you.\n\nEdit: just got home. Getting in shower now.\n\nEdit 2 electric boogaloo: risky click of the day. \n[No bamboozle](https://imgur.com/a/u1C215L)\n\nEdit 3: you!!!  I declare shenanigans.",
    author: "shantanu011",
    id,
    ups: 2233,
  },
  comments: [
    {
      created_utc: 1570697457,
      subreddit_name_prefixed: "r/unpopularopinion",
      subreddit: "unpopularopinion",
      depth: 1,
      permalink:
        "/r/unpopularopinion/comments/dfqxf8/taking_showers_with_your_socks_on_is_so_much/f35y9gp/",
      body_html:
        '&lt;div class="md"&gt;&lt;p&gt;Or the guy who likes sleeping in jeans&lt;/p&gt;\n\n&lt;p&gt;Edit: to everyone commenting, I meant the dude liked to get into bed at night with the duvet on with jeans, not just taking a nap&lt;/p&gt;\n&lt;/div&gt;',
      downs: 0,
      body:
        "Or the guy who likes sleeping in jeans\n\nEdit: to everyone commenting, I meant the dude liked to get into bed at night with the duvet on with jeans, not just taking a nap",
      author: "ShitOnMyArsehole",
      id: "t1_f35y9gp",
      ups: 638,
      parent_id: "t1_f35nn9e",
    },
    {
      created_utc: 1570703350,
      subreddit_name_prefixed: "r/unpopularopinion",
      subreddit: "unpopularopinion",
      depth: 1,
      permalink:
        "/r/unpopularopinion/comments/dfqxf8/taking_showers_with_your_socks_on_is_so_much/f361yrc/",
      body_html:
        '&lt;div class="md"&gt;&lt;p&gt;Am I pregegnant or am I ok?&lt;/p&gt;\n&lt;/div&gt;',
      downs: 0,
      body: "Am I pregegnant or am I ok?",
      author: "HansenTakeASeat",
      id: "t1_f361yrc",
      ups: 56,
      parent_id: "t1_f35nn9e",
    },
    {
      created_utc: 1570683149,
      subreddit_name_prefixed: "r/unpopularopinion",
      subreddit: "unpopularopinion",
      depth: 0,
      permalink:
        "/r/unpopularopinion/comments/dfqxf8/taking_showers_with_your_socks_on_is_so_much/f35nn9e/",
      body_html:
        '&lt;div class="md"&gt;&lt;p&gt;97% Disagree it&amp;#39;s the most unpopular opinion I&amp;#39;ve seen here after that guy who wanted to be pregnant&lt;/p&gt;\n&lt;/div&gt;',
      downs: 0,
      body:
        "I'm gonna try this tonight op, and if it's shit I will come for you.\n\nEdit: just got home. Getting in shower now.\n\nEdit 2 electric boogaloo: risky click of the day. \n[No bamboozle](https://imgur.com/a/u1C215L)\n\nEdit 3: you!!!  I declare shenanigans.",
      author: "shantanu011",
      id: "t1_f35nn9e",
      ups: 2233,
    },
    {
      created_utc: 1570703355,
      subreddit_name_prefixed: "r/unpopularopinion",
      subreddit: "unpopularopinion",
      depth: 1,
      permalink:
        "/r/unpopularopinion/comments/dfqxf8/taking_showers_with_your_socks_on_is_so_much/f361yrc/",
      body_html:
        '&lt;div class="md"&gt;&lt;p&gt;Am I pregegnant or am I ok?&lt;/p&gt;\n&lt;/div&gt;',
      downs: 0,
      body: "Am I pregegnant or am I ok?",
      author: "HansenTakeASeat",
      id: "t1_f361yrd",
      ups: 56,
      parent_id: "t1_f35nn9f",
    },
  ],
  deleteComment,
};

afterEach(cleanup);

describe("CommentItem", () => {
  it("should render correctly", () => {
    const commentItem = render(<CommentItem {...PROPS} />);
    expect(commentItem).not.toBeNull();
  });

  it("should filter and map children correctly", () => {
    render(<CommentItem {...PROPS} />);

    const comments = document.getElementsByClassName("commentColumn");
    expect(comments.length).toEqual(3);
  });

  it("should call deleteComment after clicking delete button", () => {
    render(<CommentItem {...PROPS} />);

    const button = document.getElementById(`comment-item-${id}-button`);
    fireEvent.click(button);
    expect(deleteComment).toBeCalled();
  });

  it("should split body into the correct amount of lines", () => {
    render(<CommentItem {...PROPS} />);

    const bodyLines = document.getElementsByClassName("postBodyLine");
    expect(bodyLines.length).toEqual(7);
  });

  it("should not render childComments if there are no more children of the rendered comment", () => {
    render(<CommentItem {...PROPS} comment={PROPS.comment} comments={[]} />);

    const childComments = document.getElementsByClassName("childComments");
    expect(childComments.length).toEqual(0);
  });
});
