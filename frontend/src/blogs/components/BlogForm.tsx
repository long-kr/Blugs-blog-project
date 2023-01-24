import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BlogProps } from "../../utils/type";

interface Props {
	change: (e: React.ChangeEvent<HTMLInputElement>) => void;
	submit: (e: React.SyntheticEvent) => void;
	blog: BlogProps;
}

export const BlogForm: React.FC<Props> = ({ change, submit, blog }) => {
	return (
		<div>
			<Form>
				<Form.Group className="mb-3" controlId="title">
					<Form.Label>Title</Form.Label>
					<Form.Control
						type="text"
						placeholder="bug name"
						name="title"
						value={blog.title}
						onChange={change}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="body">
					<Form.Label>Body</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						placeholder="resolve"
						name="body"
						value={blog.content}
						onChange={change}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="body">
					<Form.Label>User Id</Form.Label>
					<Form.Control
						type="text"
						placeholder="resolve"
						name="userId"
						value={blog.author_id}
						onChange={change}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="title">
					<Form.Label>Pic</Form.Label>
					<Form.Control
						type="text"
						placeholder="bug name"
						name="img"
						value={blog.img}
						onChange={change}
					/>
				</Form.Group>

				<Button onClick={submit} variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
};
