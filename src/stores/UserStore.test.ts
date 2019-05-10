import RootStore from "./RootStore";
import UserStore from "./UserStore";
import axios from "axios";

jest.mock("stores/RootStore");

describe("UserStore", () => {
    let rootStore: RootStore;
    let userStore: UserStore;
    let getSpy: jest.SpyInstance;
    let consoleSpy: jest.SpyInstance;

    beforeAll(() => {
        rootStore = new RootStore();
        userStore = new UserStore(rootStore);
        getSpy = jest.spyOn(axios, "get");
        consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    describe('on initialization', () => {
        test('should set rootStore', () => {
            expect(userStore.rootStore).toBe(rootStore);
        });
    });

    describe("fetchUsers method", () => {
        describe("on successful users fetch", () => {
            beforeAll(() => {
                getSpy.mockImplementation(() =>
                    Promise.resolve({
                        data: [{ id: 1, name: 'John Doe' }]
                    })
                );
                userStore.fetchUsers();
            });

            test("should set users", () => {
                expect(userStore.users.size).toBe(1);
            });

            test("should set isLoading to false", () => {
                expect(userStore.isLoading).toBeFalsy();
            });
        });

        describe("on unsuccessful users fetch", () => {
            beforeAll(() => {
                getSpy.mockImplementation(() => Promise.reject());

                userStore.fetchUsers();
            });

            test("should call console.log", () => {
                expect(consoleSpy).toHaveBeenCalled();
            });

            test("should set isLoading to false", () => {
                expect(userStore.isLoading).toBeFalsy();
            });
        });
    });
});
