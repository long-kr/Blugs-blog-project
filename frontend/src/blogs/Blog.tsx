import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Comments } from "../comments/Comments";
import { Loading } from "../layouts";
import { MyContext } from "../utils/apiContext";

export const Blog: React.FC = () => {
	const { id } = useParams();
	const appContext = useContext(MyContext);

	if (!appContext) {
		return <Loading />;
	}

	const post = appContext?.posts?.find((post) => post.id === Number(id));
	const postComments = appContext?.comments?.filter(
		(cm) => cm.postId === Number(id)
	);

	return (
		<React.Fragment>
			<div className="Blog-View">
				<h3>Title: {post?.title}</h3>
				<p>User: {post?.userId}</p>
				<p>ID: {post?.id}</p>
				<p>Body: {post?.body}</p>
				<h4>Comments</h4>
			</div>
			<Comments comments={postComments} />
		</React.Fragment>
	);
};
