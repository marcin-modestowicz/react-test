import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import RootStore from "stores/RootStore";
import PostList from "./PostList";

jest.mock("stores/RootStore");

describe("PostList component", () => {
  test("should render", () => {
    const postList = shallow(
        // @ts-ignore
        <PostList.wrappedComponent rootStore={new RootStore()}/>
    );
    expect(toJson(postList)).toMatchSnapshot();
  });
});
