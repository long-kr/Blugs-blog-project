export type BlogsProps = {
	author_id: string;
	id: number;
	title: string;
	content: string;
	status: "published" | "draft" | null;
	views: number;
	img?: string;
};

export type CommentsProps = {
	blog_id: number;
	id: number;
	author_id: string;
	name: string;
	email: string;
	status: "published" | "draft" | null;
	ip_address: string;
	likes: number;
	content: string;
};

export type MemoProps = {
	blogs: BlogsProps[];
	comments: CommentsProps[];
};

export type PostProps = {
	userId?: string;
	title?: string;
	body?: string;
	img?: string;
};
