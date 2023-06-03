import { Book } from "./Book";

export const BooksByDate = ({ data }) => {

	return (
		<div>
			<div>
				<h3 className="books__year">
					{data.year === 0 ? "Книги без указания года" : data.year}
				</h3>
				<div>
					{data.books.map((book) => (
						<Book key={book.title} book={book} />
					))}
				</div>
			</div>
		</div>
	);
};
