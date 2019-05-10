import axios from 'axios';
import { action, observable } from 'mobx';
import RootStore from './RootStore';
import Post, { ApiData } from 'src/models/Post';

class PostStore {
    rootStore: RootStore;
    @observable posts: Post[] = [];

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    async fetchPosts() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            
            action('set posts', () => {
                this.posts = response.data.map((post: ApiData) => new Post(post));
            });
        } catch (err) {
            console.log(err);
        }
    }
}

export default PostStore;
