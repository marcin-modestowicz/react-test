import PostStore from '../PostStore';
import UserStore from '../UserStore';
import Post from 'models/Post';
import User from 'models/User';

class RootStore {
    postStore: PostStore;
    userStore: UserStore;

    constructor() {
        this.postStore = new PostStore(this);
        this.userStore = new UserStore(this);

        this.postStore.posts.push(new Post({ id: 1, userId: 1, title: 'title', body: 'content' }));
        this.userStore.users.set(1, new User({ id: 1, name: 'John Doe' }))
    }
}

export default RootStore;
