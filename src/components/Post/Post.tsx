import React from 'react';

interface Props {
    post: {
        title: string;
        author: string;
        content: string;
    }
}

const Post = ({ post: { title, author, content }}): Props => (
    <article>
        <header>
            <h2>{title}</h2>
        </header>
    </article>
);

export default Post;
