export type BlogProps = {
	author_id: number;
	id?: number;
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
	blogs: BlogProps[];
	comments: CommentsProps[];
};
