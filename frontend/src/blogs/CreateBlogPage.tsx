import React from "react";
import { useNavigate } from "react-router-dom";
import { ErrorAlert } from "../layouts";
import { createPost, BlogProps } from "../utils";
import { BlogForm } from "./components";

export const CreateBlogPage: React.FC = () => {
	const blogInit: BlogProps = {
		author_id: 1,
		title: "",
		content: "",
		status: "draft",
		views: 0,
		img: "",
	};

	const navigate = useNavigate();
	const [blog, setBlog] = React.useState<BlogProps>({ ...blogInit });
	const [error, setError] = React.useState<any>(null);

	const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setError(null);
		createPost(blog)
			.then((data) => {
				console.log(data);
				navigate("/");
			})
			.catch(setError);
	};

	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const target = event.target as typeof event.target;

		setBlog((prev) => ({
			...prev,
			[target.name]: target.value,
		}));
	};

	return (
		<div>
			<div>
				<h2>Create Blog</h2>
			</div>
			<ErrorAlert error={error} />
			<BlogForm change={changeHandler} submit={submitHandler} blog={blog} />
		</div>
	);
};
