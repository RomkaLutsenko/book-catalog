import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase-config";
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";

export const BookForm = ({className, id}) => {
	const [title, setTitle] = useState("");
	const [year, setYear] = useState("");
	const [rating, setRating] = useState("");
	const [authors, setAuthors] = useState("");
	const [ISBN, setISBN] = useState("");

	const createBook = () => {
		if (title.length && authors.length) {
			let newBook = { id, title, authors, ISBN:"" };

			if (year.length) {
				newBook = { ...newBook, year: Number(year) };
			}

			if (rating.length) {
				newBook = { ...newBook, rating: Number(rating) };
			}

			if (ISBN.length) {
				newBook = { ...newBook, ISBN };
			}

			try {
				const docRef = addDoc(collection(db, "books"), newBook);
				console.log("Document written with ID: ", docRef);
			} catch (e) {
				console.error("Error adding document: ", e);
			}

		} else {
			alert("Заполните важные поля");
		}
	};

	return (
		<form className={className}>
				<Input
					type="text"
					placeholder="title"
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
				<Input
					type="text"
					placeholder="year"
					value={year}
					onChange={(e) => {
						setYear(e.target.value);
					}}
				/>
				<Input
					type="text"
					placeholder="rating"
					value={rating}
					onChange={(e) => {
						setRating(e.target.value);
					}}
				/>
				<Input
					type="text"
					placeholder="authors"
					value={authors}
					onChange={(e) => {
						setAuthors(e.target.value);
					}}
				/>
				<Input
					type="text"
					placeholder="ISBN"
					value={ISBN}
					onChange={(e) => {
						setISBN(e.target.value);
					}}
				/>
				<Button onClick={createBook}>
					Add
				</Button>
		</form>
	);
};
