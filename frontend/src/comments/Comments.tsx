import React from "react";
import { CommentsProps } from "../utils/type";

export const Comments: React.FC<{ comments: CommentsProps[] }> = ({
	comments,
}) => {
	const list = comments?.map((comment) => (
		<div key={comment.id}>
			<p>Name: {comment.name}</p>
			<p>PostId: {comment.blog_id}</p>
			<p>Email: {comment.email}</p>
			<p>Body: {comment.content}</p>
			<hr></hr>
		</div>
	));

	return <div>{list}</div>;
};
