import React from "react";
import { PrimaryButton } from "../../components/Buttons";
import { BlogProps } from "../../utils";
import { Loading } from "../../layouts";
import Dropdown from "react-bootstrap/Dropdown";

interface Props {
	blogs: BlogProps[] | undefined;
	page: number;
	setBlogs: React.Dispatch<React.SetStateAction<BlogProps[]>>;
	setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const ButtonsForList = ({ blogs, setBlogs, page, setPage }: Props) => {
	if (!blogs) {
		return <Loading />;
	}

	//Page buttons
	const handleBackButton = () => {
		if (page <= 19) {
			return setPage((page) => (page = 10));
		}
		setPage((page) => page - 10);
	};

	const handleNextButton = () => {
		if (page > blogs.length - 10) {
			return setPage((page) => (page = blogs.length));
		}
		setPage((page) => page + 10);
	};

	const handleEndButton = () => {
		setPage((page) => (page = blogs.length));
	};

	const handleHomeButton = () => {
		setPage((page) => (page = 10));
	};

	//Sort Dropdown
	const handleSortByViews = () => {
		console.log("views!");
		const newBlogs = [...blogs];
		newBlogs.sort((blogA, blogB) => blogB.views - blogA.views);
		setBlogs(newBlogs);
	};

	const handleSortByDate = () => {
		console.log("by Date!");
	};

	const handleSortByName = () => {
		console.log("views!");
		const newBlogs = [...blogs];
		newBlogs.sort((blogA, blogB) =>
			blogA.title.toLowerCase() > blogB.title.toLowerCase() ? 1 : -1
		);
		setBlogs(newBlogs);
	};

	return (
		<div>
			<div>
				<PrimaryButton onClick={handleHomeButton} type="button">
					Home
				</PrimaryButton>
				<PrimaryButton onClick={handleBackButton} type="button">
					Back
				</PrimaryButton>
				<PrimaryButton onClick={handleNextButton} type="button">
					Next
				</PrimaryButton>
				<PrimaryButton onClick={handleEndButton} type="button">
					End
				</PrimaryButton>
			</div>
			<div>
				<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						Sort
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item onClick={handleSortByViews}>By Views</Dropdown.Item>
						<Dropdown.Item onClick={handleSortByDate}>By Date</Dropdown.Item>
						<Dropdown.Item onClick={handleSortByName}>By Name</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</div>
	);
};
