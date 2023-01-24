import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { MyContext } from "../utils";
import { Loading } from "../layouts";

export const ListBlogPage: React.FC = () => {
	const appContext = useContext(MyContext);
	const blogs = appContext?.blogs;

	const [page, setPage] = useState<number>(10);

	if (!blogs) {
		return <Loading />;
	}

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
			<Link to={`/blogs/${blog.id}`}>Title: {blog.title}</Link>
			<br />
			<p>ID: {blog.id}</p>
			<div>Views: {blog.views}</div>
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
