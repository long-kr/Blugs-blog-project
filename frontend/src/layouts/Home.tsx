import React, { useContext } from "react";
import { MyContext } from "../utils/apiContext";

export const Home: React.FC = () => {
  // .slice(0, 20)
  const appContext = useContext(MyContext);
  const posts = appContext?.posts;

  if (!posts) {
    return <h3>Loading...</h3>;
  }
  const list = posts.map((post) => (
    <div key={post.id} className="Blog-View">
      <p>Post ID: {post.id}</p>
      <p>Title: {post.title}</p>
      <p>{post.body}</p>
      {post.img ? <img src={post.img} alt="post img" /> : null}
      <hr></hr>
    </div>
  ));

  return <React.Fragment>{list}</React.Fragment>;
};
