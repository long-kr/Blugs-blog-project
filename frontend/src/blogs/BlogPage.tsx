import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Comments } from "../comments/Comments";
import { Loading } from "../layouts";
import { MyContext } from "../utils/apiContext";

export const BlogPage: React.FC = () => {
	const { id } = useParams();
	const appContext = useContext(MyContext);

	if (!appContext) {
		return <Loading />;
	}

	const blog = appContext?.blogs?.find((blog) => blog.id === Number(id));
	const postComments = appContext?.comments?.filter(
		(cm) => cm.blog_id === Number(id)
	);

	return (
		<React.Fragment>
			<div className='Blog-View'>
				<h3>Title: {blog?.title}</h3>
				<p>User: {blog?.author_id}</p>
				<p>ID: {blog?.id}</p>
				<p>Body: {blog?.content}</p>
				<h4>Comments</h4>
			</div>
			<Comments comments={postComments} />
		</React.Fragment>
	);
};
