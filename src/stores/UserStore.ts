import axios from 'axios';
import { action } from 'mobx';
import User, { ApiData } from '../models/User';
import RootStore from './RootStore';

class UserStore {
    rootStore: RootStore;
    users: Map<number, User> = new Map();

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    fetchPosts() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            action('set users', () => {
                response.data.forEach((item: ApiData) => {
                    if (!this.users.has(item.id)) {
                        this.users.set(item.id, new User(item))
                    }
                })
            });
        })
    }
}

export default UserStore;
