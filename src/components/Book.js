import React from "react";
import {
	doc,
	// eslint-disable-next-line
	deleteDoc,
} from "firebase/firestore";
import db from "../firebase-config";
import Button from "./UI/button/Button";

export const Book = ({ book }) => {
	const deleteBook = () => {
		// eslint-disable-next-line
		const bookDoc = doc(db, "books", book.id);
		// deleteDoc(bookDoc);
	};

	return (
		<div className="Book">
			{book.title} <Button className={"list-btn"} onClick={deleteBook}>Delete</Button>
		</div>
	);
};
