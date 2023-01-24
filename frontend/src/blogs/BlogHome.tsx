import React, { useContext } from "react";
import { MyContext } from "../utils/apiContext";

export const BlogHomePage: React.FC = () => {
	const appContext = useContext(MyContext);
	const blogs = appContext?.blogs;

	if (!blogs) {
		return <h3>loading</h3>;
	}

	return (
		<div className="Blogs-View">
			<BlogHomePage />
		</div>
	);
};
