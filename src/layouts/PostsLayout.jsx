import React from 'react';
import PostsNavbar from '../components/PostsNavbar';
const PostsLayout = ({ children }) => (
    <>
        <PostsNavbar />
        <main>{children}</main>
    </>
);

export default PostsLayout;