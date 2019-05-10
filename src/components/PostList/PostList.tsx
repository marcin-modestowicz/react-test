import React, { useEffect, Component } from 'react';
import { inject, observer } from 'mobx-react';
import Post from 'components/Post';
import RootStore from 'stores/RootStore';
import './PostList.scss';

interface Props {
    rootStore?: RootStore
}

@inject('rootStore')
@observer
class PostList extends Component<Props> {
    componentDidMount() {
        const {
            userStore,
            postStore,
        } = this.props.rootStore!;

        postStore.fetchPosts();
        setTimeout(() => {
            userStore.fetchUsers();
        }, 2000);
    }

    render() {
        const {
            userStore,
            postStore,
        } = this.props.rootStore!;

        return (
            <section>
                {postStore.posts.map(({ id, title, userId, body }) => {
                    const user = userStore.users.get(userId);
                    const author = user ? user.name : '...';
                    
                    return (
                        <Post
                            key={id}
                            title={title}
                            author={author}
                            content={body}
                        />
                    );
                })}
            </section>
        );
    }
}

export default PostList;
