import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { BlogsProps } from "../../utils/type";

export const BlogsList: React.FC<{ blogs: BlogsProps[] }> = ({ blogs }) => {
	const [page, setPage] = useState<number>(10);

	const handleBackButton = () => {
		if (page <= 19) {
			return setPage((page) => (page = 10));
		}
		setPage((page) => page - 10);
	};

	const handleNextButton = () => {
		if (page > blogs.length - 10) {
			return setPage((page) => (page = blogs.length));
		}
		setPage((page) => page + 10);
	};

	const handleEndButton = () => {
		setPage((page) => (page = blogs.length));
	};

	const handleHomeButton = () => {
		setPage((page) => (page = 10));
	};

	const list = blogs.slice(page - 10, page).map((blog) => (
		<div key={blog.id}>
			<Link to={`/posts/${blog.id}`}>Title: {blog.title.slice(1, 20)}</Link>
			<br />
			<p>ID: {blog.id}</p>
		</div>
	));

	return (
		<div className="Blogs-View">
			<Button onClick={handleHomeButton}>home</Button>
			<Button onClick={handleBackButton}>back</Button>
			<Button onClick={handleNextButton}>next</Button>
			<Button onClick={handleEndButton}>end</Button>

			{list}
		</div>
	);
};
