import React from "react";
import { render, cleanup } from "@testing-library/react";
import PostBody from "../PostBody";

const PROPS = {
  post: {
    subreddit: "unpopularopinion",
    selftext:
      "I almost always shower with my socks on. It just feels more relaxing, I don’t really like the feeling of water below my feet. Having socks on, even light ones, feels like a nice towel to put around my feet when I’m showering. It’s just better this way. I’ve done this since I was like, 8, and I don’t ever plan on changing it. When I told my friends about it they all said it was really weird. I just think it is more comfortable, relaxing, and overall a better experience.\n\nEdit: jeez I really didn’t think that this was a big deal.\n\nEdit 2: To address some things:Yes, I actually do this, I personally like it, and it really isn’t problematic so I do it. My feet aren’t always super clean but I rub lotion on them occasionally.\n\nEdit 3: well I went to sleep, and now I have 953 notifications.",
    title: "Taking showers with your socks on is so much better than not",
    subreddit_name_prefixed: "r/unpopularopinion",
    name: "t3_dfqxf8",
    score: 20700,
    thumbnail: "self",
    selftext_html:
      '&lt;!-- SC_OFF --&gt;&lt;div class="md"&gt;&lt;p&gt;I almost always shower with my socks on. It just feels more relaxing, I don’t really like the feeling of water below my feet. Having socks on, even light ones, feels like a nice towel to put around my feet when I’m showering. It’s just better this way. I’ve done this since I was like, 8, and I don’t ever plan on changing it. When I told my friends about it they all said it was really weird. I just think it is more comfortable, relaxing, and overall a better experience.&lt;/p&gt;\n\n&lt;p&gt;Edit: jeez I really didn’t think that this was a big deal.&lt;/p&gt;\n\n&lt;p&gt;Edit 2: To address some things:Yes, I actually do this, I personally like it, and it really isn’t problematic so I do it. My feet aren’t always super clean but I rub lotion on them occasionally.&lt;/p&gt;\n\n&lt;p&gt;Edit 3: well I went to sleep, and now I have 953 notifications.&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;',
    id: "dfqxf8",
    permalink:
      "/r/unpopularopinion/comments/dfqxf8/taking_showers_with_your_socks_on_is_so_much/",
    url:
      "https://www.reddit.com/r/unpopularopinion/comments/dfqxf8/taking_showers_with_your_socks_on_is_so_much/",
    subreddit_subscribers: 775462,
    created_utc: 1570671373,
    is_video: false,
    author: "cynicallogic",
    ups: 20700,
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
        id: "t1_f35nn9e456",
        ups: 2233,
      },
    ],
  },
};

afterEach(cleanup);

describe("PostBody", () => {
  it("should render correctly", () => {
    const postBody = render(<PostBody {...PROPS} />);
    expect(postBody).not.toBeNull();
  });

  it("should render post lines correctly while accounting for line breaks", () => {
    render(<PostBody {...PROPS} />);

    const postLines = document.getElementsByClassName("postBodyLine");
    expect(postLines.length).toEqual(4);
  });
});
