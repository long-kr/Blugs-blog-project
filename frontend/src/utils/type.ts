export type PostsProps = {
  userId: string;
  id: number;
  title: string;
  body: string;
  img?: string;
};

export type CommentsProps = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type MemoProps = {
  posts: PostsProps[];
  comments: CommentsProps[];
};

export type PostProps = {
  userId?: string;
  title?: string;
  body?: string;
  img?: string;
};
