import User from "./User";

describe("User model", () => {
  test("should assign properties on creation", () => {
    const apiData = { id: 1, name: 'John Doe' };
    const user = new User(apiData);

    expect(user).toMatchObject(apiData);
  });
});