import { Link } from 'react-router-dom';
type Props = {};

export const Navbar = (props: Props) => {
    return (
        <div className="nav--bar">
            <Link to="/">Home</Link>
            <Link to="blogs">Blogs</Link>
            <Link to="blogs/create">Write a Bug Blog</Link>
            <div>Search</div>
        </div>
    );
};
