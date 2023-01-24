import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, useMemo } from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { NotFound, Header, Navbar, Footer, Home } from "./layouts";
import { Blog, BlogsList, BlogForm } from "./blogs";
import { listComments, listPosts } from "./utils/api";
import { MyContext } from "./utils/apiContext";
import { BlogsProps, CommentsProps, MemoProps } from "./utils/type";

function App() {
	const [posts, setPosts] = useState<BlogsProps[]>([]);
	const [comments, setComments] = useState<CommentsProps[]>([]);
	const [isLoading, setIsLoading] = useState<true | boolean>(true);

	const providerValues = useMemo<MemoProps | null>(
		() => ({ posts, comments }),
		[posts, comments]
	);

	useEffect(() => {
		load();
	}, []);

	function load() {
		const abortController = new AbortController();

		listPosts(abortController.signal)
			.then((data) => setPosts(data))
			.catch((err) => console.log(err));

		listComments(abortController.signal)
			.then((data) => {
				setComments(data);
				setIsLoading(false);
			})
			.catch((err) => console.log(err));

		return () => abortController.abort();
	}

	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Header />
				<main className="article-box">
					{!isLoading ? (
						<article>
							<MyContext.Provider value={providerValues}>
								<Switch>
									<Route path="/" element={<Home />} />
									<Route path="/posts" element={<BlogsList />} />
									<Route path="/posts/:id" element={<Blog />} />
									<Route path="/posts/create" element={<BlogForm />} />
									<Route path="*" element={<NotFound />} />
								</Switch>
							</MyContext.Provider>
						</article>
					) : (
						<h2>Loading</h2>
					)}
				</main>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
