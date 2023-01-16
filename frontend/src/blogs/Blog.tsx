import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../utils/apiContext";

export const Blog: React.FC = () => {
  const { id } = useParams();
  const appContext = useContext(MyContext);

  const post = appContext?.posts?.find((post) => post.id === Number(id));
  const comment = appContext?.comments?.filter(
    (cm) => cm.postId === Number(id)
  );

  return (
    <div className="Blog-View">
      <h3>Title: {post?.title}</h3>
      <p>User: {post?.userId}</p>
      <p>ID: {post?.id}</p>
      <p>Body: {post?.body}</p>
      <h4>Comments</h4>
      {comment?.map((cm) => (
        <div key={cm.id}>
          <p>Name: {cm.name}</p>
          <p>PostId: {cm.postId}</p>
          <p>Email: {cm.email}</p>
          <p>Body: {cm.body}</p>
          <hr></hr>
        </div>
      ))}
    </div>
  );
};
