import React, { useState, useContext, useEffect } from "react";
import { BlogProps, MyContext } from "../utils";
import { Loading } from "../layouts";
import { BlogViewForList, ButtonsForList } from "./components";

export const ListBlogPage: React.FC = () => {
	const appContext = useContext(MyContext);
	const blogs = appContext?.blogs;

	const [newArrBlogs, setNewArrBlogs] = useState<BlogProps[]>([]);
	const [page, setPage] = useState<number>(10);

	useEffect(() => {
		if (blogs) {
			setNewArrBlogs(blogs);
		}
	}, [blogs]);

	if (!blogs) {
		return <Loading />;
	}

	return (
		<div className="Blogs-View">
			<ButtonsForList
				setBlogs={setNewArrBlogs}
				blogs={newArrBlogs}
				page={page}
				setPage={setPage}
			/>
			<BlogViewForList blogs={newArrBlogs} page={page} />
		</div>
	);
};
