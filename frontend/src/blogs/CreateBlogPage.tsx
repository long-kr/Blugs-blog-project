import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorAlert } from "../layouts";
import { createPost, BlogProps } from "../utils";
import { BlogForm } from "./components";

export const CreateBlogPage: React.FC<{ refreshBlogs: () => void }> = ({
	refreshBlogs,
}) => {
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
	const [apiSuccess, setApiSuccess] = React.useState<boolean>(false);
	const [error, setError] = React.useState<any>(null);

	const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setApiSuccess(false);
		setError(null);
		createPost(blog)
			.then((data) => {
				console.log(data);
				setBlog({ ...blogInit });
			})
			.catch(setError);
		setApiSuccess(true);
	};

	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const target = event.target as typeof event.target;
		setBlog((prev) => ({
			...prev,
			[target.name]: target.value,
		}));
	};

	//Convert picture format using FileReader API to read the file as a dataURL
	const fileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const target = event.target as typeof event.target;
		const file = target.files![0];
		if (!file) {
			return;
		}

		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setBlog((prev) => ({
				...prev,
				img: reader.result as string,
			}));
		};
	};

	//remove eventListener to avoid memory leak.
	useEffect(() => {
		if (apiSuccess) {
			setApiSuccess(false);
			refreshBlogs();
			navigate("/");
		}

		return () => {
			const reader = new FileReader();
			reader.removeEventListener("loadend", () => {});
		};
	}, [apiSuccess, navigate, refreshBlogs]);

	return (
		<div>
			<div>
				<h2>Create Blog</h2>
			</div>
			<ErrorAlert error={error} />
			<BlogForm
				fileChange={fileChangeHandler}
				change={changeHandler}
				submit={submitHandler}
				blog={blog}
			/>
		</div>
	);
};
