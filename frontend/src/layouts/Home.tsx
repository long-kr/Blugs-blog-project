import React, { useContext } from 'react';
import { MyContext } from '../utils/apiContext';
import { Loading } from './Loading';

export const Home: React.FC = () => {
    const appContext = useContext(MyContext);
    const blogs = appContext?.blogs;

    if (!blogs) {
        return <Loading />;
    }

    const newArrBlogs = [...blogs];
    const list = newArrBlogs
        .sort((blogA, blogB) => blogB.views - blogA.views)
        .slice(0, 20)
        .map(blog => (
            <div key={blog.id} className="Blog-View">
                <p>Post ID: {blog.id}</p>
                <p>Title: {blog.title}</p>
                <p>Views: {blog.views}</p>
                <p>{blog.content.slice(0, 50)}</p>
                <hr></hr>
            </div>
        ));

    return (
        <React.Fragment>
            <h3>Top Views Blog</h3>
            <div>{list}</div>
        </React.Fragment>
    );
};
