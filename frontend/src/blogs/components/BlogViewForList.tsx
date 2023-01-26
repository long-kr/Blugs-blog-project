import React from "react";
import { Link } from "react-router-dom";
import { BlogProps } from "../../utils";

export const BlogViewForList: React.FC<{
	blogs: BlogProps[];
	page: number;
}> = ({ blogs, page }) => {
	const list = blogs.slice(page - 10, page).map((blog) => (
		<div key={blog.id}>
			<Link to={`/blogs/${blog.id}`}>Title: {blog.title}</Link>
			<br />
			<p>ID: {blog.id}</p>
			<div>Views: {blog.views}</div>
		</div>
	));
	return <div>{list}</div>;
};
