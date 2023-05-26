import React from "react";
import { BooksByDate } from "./BooksByDate";

export const BooksList = ({ data }) => {
	return (
		<div>
			<div>
				{data.map((date) => (
					<BooksByDate
						key={date.year}
						data={date}
					/>
				))}
			</div>
		</div>
	);
};
