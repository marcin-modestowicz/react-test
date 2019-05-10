import axios from 'axios';
import { runInAction, observable } from 'mobx';
import User, { ApiData } from '../models/User';
import RootStore from './RootStore';

class UserStore {
    rootStore: RootStore;
    @observable users: Map<number, User> = new Map();
    @observable isLoading: boolean = false;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    async fetchUsers() {
        runInAction('set loader', () => {
            this.isLoading = true;
        });

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            
            runInAction('set users', () => {
                response.data.forEach((item: ApiData) => {
                    if (!this.users.has(item.id)) {
                        this.users.set(item.id, new User(item))
                    }
                })
            });
        } catch (err) {
            console.log(err);
        } finally {
            runInAction('set loader', () => {
                this.isLoading = false;
            });
        }
    }
}

export default UserStore;
