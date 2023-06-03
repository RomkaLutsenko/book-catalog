import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import db from "../firebase-config";
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";

export const BookForm = ({className}) => {
	const [book, setBook] = useState({id: 0, title: '', year: '', rating: '', authors: '', ISBN: ''})

	const createBook = async (e) => {
		e.preventDefault()

		if (book.title.length <= 100 &&
			book.authors.length &&
			(book.year === "" || book.year >= 1800)
			) {

			let newBook = { ...book, id: Date.now()};
			try {
				await setDoc(doc(db, "books", `${newBook.id}`), newBook);
			} catch (e) {
				console.error("Error adding document: ", e);
			}
			setBook({key: '', title: '', year: '', rating: '', authors: '', ISBN: ''})
		} else {
			if (!book.title.length) {
				alert("Заполните поле \"название\" ");
			}
			if (book.title.length > 100) {
				alert("Поле название не может содеражать более 100 символов");
			}
			if (!book.authors.length) {
				alert("Книга должна содержать хотя бы одного автора");
			}
			if (book.year !== '' && book.year < 1800) {
				alert("Книга должна быть выпущена не ранее 1800 года");
			}
			if ( `${Number(book.rating)}` === 'NaN' || Number(book.rating) < 0 || Number(book.rating) > 10) {
				alert("Рейтинг должен быть числом от 0 до 10");
			}
		}

	};

	return (
		<form className={className}>
				<Input
					type="text"
					placeholder="Название"
					value={book.title}
					onChange={(e) => {
						setBook({...book, title: e.target.value});
					}}
				/>
				<Input
					type="text"
					placeholder="Год"
					value={book.year}
					onChange={(e) => {
						setBook({...book, year: e.target.value});
					}}
				/>
				<Input
					type="text"
					placeholder="Рейтинг"
					value={book.rating}
					onChange={(e) => {
						setBook({...book, rating: e.target.value});
					}}
				/>
				<Input
					type="text"
					placeholder="Авторы"
					value={book.authors}
					onChange={(e) => {
						setBook({...book, authors: e.target.value});
					}}
				/>
				<Input
					type="text"
					placeholder="Примечание"
					value={book.ISBN}
					onChange={(e) => {
						setBook({...book, ISBN: e.target.value});
					}}
				/>
				<Button onClick={createBook}>
					Add
				</Button>
		</form>
	);
};
