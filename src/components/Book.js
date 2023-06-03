import { doc, deleteDoc} from "firebase/firestore";
import db from "../firebase-config";
import Button from "./UI/button/Button";

export const Book = ({ book }) => {
	const deleteBook = async(e) => {
		e.preventDefault()

		const bookDoc = doc(db, "books", `${book.id}`);
		await deleteDoc(bookDoc);
	};

	return (
		<div className="Book">
			<div className="Book__title">
				{book.title}
				<Button className={"list-btn"} onClick={deleteBook}>Delete</Button>
			</div>
			<div className="Book__body">
				Авторы: {book.authors}
				<br/>
				Год издания: {book.year || `Неизвестен`}
				<br/>
				Рейтинг: {book.rating || `Неизвестен`}
				<br/>
				Примечание: {book.ISBN}
			</div>
		</div>
	);
};
