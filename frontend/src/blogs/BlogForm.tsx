import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ErrorAlert } from "../layouts";
import { createPost } from "../utils/api";
import { PostProps } from "../utils/type";

export const BlogForm: React.FC = () => {
	const postInit: PostProps = {
		userId: "",
		title: "",
		body: "",
		img: "",
	};

	const [post, setPost] = React.useState<PostProps>({ ...postInit });

	const [error, setError] = React.useState<any>(null);

	const navigate = useNavigate();

	const submitHandler = (e: React.SyntheticEvent) => {
		e.preventDefault();
		setError(null);
		createPost(post)
			.then((data) => {
				console.log(data);
				navigate("/");
			})
			.catch(setError);
	};

	const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		const target = e.target as typeof e.target;

		setPost((pre) => ({
			...pre,
			[target.name]: target.value,
		}));
	};

	return (
		<div>
			<div>
				<h2>Create Blog</h2>
			</div>
			<ErrorAlert error={error} />
			<Form>
				<Form.Group className="mb-3" controlId="title">
					<Form.Label>Title</Form.Label>
					<Form.Control
						type="text"
						placeholder="bug name"
						name="title"
						value={post.title}
						onChange={changeHandler}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="body">
					<Form.Label>Body</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						placeholder="resolve"
						name="body"
						value={post.body}
						onChange={changeHandler}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="body">
					<Form.Label>User Id</Form.Label>
					<Form.Control
						type="text"
						placeholder="resolve"
						name="userId"
						value={post.userId}
						onChange={changeHandler}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="title">
					<Form.Label>Pic</Form.Label>
					<Form.Control
						type="text"
						placeholder="bug name"
						name="img"
						value={post.img}
						onChange={changeHandler}
					/>
				</Form.Group>

				<Button onClick={submitHandler} variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
};
