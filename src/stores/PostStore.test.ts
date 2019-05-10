import RootStore from "./RootStore";
import PostStore from "./PostStore";
import axios from "axios";

jest.mock("stores/RootStore");

describe("PostStore", () => {
    let rootStore: RootStore;
    let postStore: PostStore;
    let getSpy: jest.SpyInstance;
    let consoleSpy: jest.SpyInstance;

    beforeAll(() => {
        rootStore = new RootStore();
        postStore = new PostStore(rootStore);
        getSpy = jest.spyOn(axios, "get");
        consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    describe('on initialization', () => {
        test('should set rootStore', () => {
            expect(postStore.rootStore).toBe(rootStore);
        });
    });

    describe("fetchPosts method", () => {
        describe("on successful posts fetch", () => {
            beforeAll(() => {
                getSpy.mockImplementation(() =>
                    Promise.resolve({
                        data: [{ id: 1, userId: 1, title: 'title', body: 'content' }]
                    })
                );
                postStore.fetchPosts();
            });

            test("should set posts", () => {
                expect(postStore.posts.length).toBe(1);
            });

            test("should set isLoading to false", () => {
                expect(postStore.isLoading).toBeFalsy();
            });
        });

        describe("on unsuccessful posts fetch", () => {
            beforeAll(() => {
                getSpy.mockImplementation(() => Promise.reject());

                postStore.fetchPosts();
            });

            test("should call console.log", () => {
                expect(consoleSpy).toHaveBeenCalled();
            });

            test("should set isLoading to false", () => {
                expect(postStore.isLoading).toBeFalsy();
            });
        });
    });
});
