import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { MyContext } from "../utils/apiContext";

export const BlogsList: React.FC = () => {
  const [page, setPage] = useState<number>(10);
  const appContext = useContext(MyContext);
  const posts = appContext?.posts;

  if (!posts) {
    return <h3>loading</h3>;
  }

  const handleBackButton = () => {
    if (page <= 19) {
      return setPage((page) => (page = 10));
    }
    setPage((page) => page - 10);
  };

  const handleNextButton = () => {
    if (page > posts.length - 10) {
      return setPage((page) => (page = posts.length));
    }
    setPage((page) => page + 10);
  };

  const handleEndButton = () => {
    setPage((page) => (page = posts.length));
  };

  const handleHomeButton = () => {
    setPage((page) => (page = 10));
  };

  const list = posts.slice(page - 10, page).map((post) => (
    <div key={post.id}>
      <Link to={`/posts/${post.id}`}>Title: {post.title.slice(1, 20)}</Link>
      <br />
      <p>ID: {post.id}</p>
    </div>
  ));

  return (
    <div className="Blogs-View">
      <Button onClick={handleHomeButton}>home</Button>
      <Button onClick={handleBackButton}>back</Button>
      <Button onClick={handleNextButton}>next</Button>
      <Button onClick={handleEndButton}>end</Button>

      {list}
    </div>
  );
};
