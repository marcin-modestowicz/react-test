import Post from "./Post";

describe("Post model", () => {
  test("should assign properties on creation", () => {
    const apiData = { id: 1, userId: 1, title: 'title', body: 'content' };
    const post = new Post(apiData);

    expect(post).toMatchObject(apiData);
  });
});
