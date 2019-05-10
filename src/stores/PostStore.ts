import axios from 'axios';
import { runInAction, observable } from 'mobx';
import RootStore from './RootStore';
import Post, { ApiData } from 'models/Post';

class PostStore {
    rootStore: RootStore;
    @observable isLoading: boolean = false;
    @observable posts: Post[] = [];

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    async fetchPosts() {
        runInAction('set loader', () => {
            this.isLoading = true;
        });

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            
            runInAction('set posts', () => {
                this.posts = response.data.map((post: ApiData) => new Post(post));
                console.log('posts', this.posts);
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

export default PostStore;
