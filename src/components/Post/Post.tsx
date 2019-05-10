import React from 'react';
import './Post.scss';

interface Props {
    title: string;
    author: string;
    content: string;
}

const Post = ({ title, author, content }: Props) => (
    <article>
        <header>
            <h2>{title}</h2>
            <h3>{author}</h3>
        </header>
        {content}
    </article>
);

export default Post;
