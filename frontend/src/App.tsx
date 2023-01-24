import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, useMemo } from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { NotFound, Header, Navbar, Footer, Home } from "./layouts";
import { BlogHomePage } from "./blogs/BlogHome";
import { listComments, listBlogs } from "./utils/api";
import { MyContext } from "./utils/apiContext";
import { BlogsProps, CommentsProps, MemoProps } from "./utils/type";

function App() {
	const [blogs, setBlogs] = useState<BlogsProps[]>([]);
	const [comments, setComments] = useState<CommentsProps[]>([]);
	const [isLoading, setIsLoading] = useState<true | boolean>(true);

	const providerValues = useMemo<MemoProps | null>(
		() => ({ blogs, comments }),
		[blogs, comments]
	);

	useEffect(() => {
		load();
	}, []);

	function load() {
		const abortController = new AbortController();

		listBlogs(abortController.signal)
			.then((data) => setBlogs(data))
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
									<Route path="/blogs" element={<BlogHomePage />} />
									<Route path="/blogs/:id" element={<Blog />} />
									<Route path="/blogs/create" element={<BlogForm />} />
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
