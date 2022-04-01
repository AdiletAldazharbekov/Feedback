import { createContext, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	// Huks
	const [feedback, setFeedback] = useState([]);

	useEffect(() => {
		fetchFeedback();
	}, []);

	// Fetch
	const fetchFeedback = async () => {
		const response = await fetch(
			"https://62470445e3450d61b006097f.mockapi.io/feedback"
		);
		const data = await response.json();
		setFeedback(data);
	};

	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});

	// Functions
	const deleteFeedback = async (id) => {
		if (window.confirm("Удалить feedback?"))
			await fetch(
				`https://62470445e3450d61b006097f.mockapi.io/feedback/${id}`,
				{ method: "DELETE" }
			);
		setFeedback(feedback.filter((el) => el.id !== id));
	};

	const addFeedback = async (newFeedback) => {
		// newFeedback.id = uuidv4();
		const response = await fetch(
			"https://62470445e3450d61b006097f.mockapi.io/feedback",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newFeedback),
			}
		);
		const data = await response.json();
		setFeedback([data, ...feedback]);
	};

	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true,
		});
	};

	const updateFeedback = async (id, updItem) => {
		const response = await fetch(
			`https://62470445e3450d61b006097f.mockapi.io/feedback/${id}`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updItem),
			}
		);
		const data = await response.json();
		setFeedback(
			feedback.map((item) =>
				item.id === id ? { ...item, ...data } : item
			)
		);
	};

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				deleteFeedback,
				addFeedback,
				editFeedback,
				feedbackEdit,
				updateFeedback,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
