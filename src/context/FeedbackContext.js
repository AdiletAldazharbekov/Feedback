import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	// Huks
	const [feedback, setFeedback] = useState([]);
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});
	// Functions
	const deleteFeedback = (id) => {
		if (window.confirm("Удалить feedback?"))
			setFeedback(feedback.filter((el) => el.id !== id));
	};

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
	};

	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true,
		});
	};

	const updateFeedback = (id,newFeedback) => {
		if (window.confirm("Сохранить изменения?"))
		setFeedback(feedback.filter((el) => el.id !== id));
		newFeedback.id=id
		setFeedback([newFeedback, ...feedback]);
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
