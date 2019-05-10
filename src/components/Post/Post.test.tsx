import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Post from "./Post";

describe("Post component", () => {
  test("should render", () => {
    const post = shallow(
        <Post
            title="title"
            author="author"
            content="content"
        />
    );
    expect(toJson(post)).toMatchSnapshot();
  });
});
