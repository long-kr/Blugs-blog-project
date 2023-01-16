import { Link } from "react-router-dom";
type Props = {};

export const Navbar = (props: Props) => {
  return (
    <div className="nav--bar">
      <Link to="/">Home</Link>
      <Link to="posts">Blogs</Link>
      <Link to="posts/create">Create a Post</Link>
      <div>Search</div>
    </div>
  );
};
