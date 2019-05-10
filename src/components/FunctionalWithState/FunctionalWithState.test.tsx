import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import FunctionalWithState from "./FunctionalWithState";

describe("FunctionalWithState component", () => {
  test("should render", () => {
    const functionalWithState = shallow(
      <FunctionalWithState/>
    );
    expect(toJson(functionalWithState)).toMatchSnapshot();
  });

  test("should render with data", () => {
    const functionalWithState = shallow(
      <FunctionalWithState/>
    );

    functionalWithState.find('#email').simulate('change', { currentTarget: { value: 'email' }});
    functionalWithState.find('#password').simulate('change', { currentTarget: { value: 'password' }});

    expect(toJson(functionalWithState)).toMatchSnapshot();
  });
});
