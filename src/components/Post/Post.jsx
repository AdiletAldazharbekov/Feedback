import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Card from "../../Shared/Card";
import { FiTrash2} from "react-icons/fi";
import { Link } from "react-router-dom";
import FeedbackContext from "../../context/FeedbackContext";

function Post() {
	const { deleteFeedback } = useContext(FeedbackContext);
	const params = useParams();

	return (
		<Card>
			<Link to={"/"}>
				<button
					className="close"
					onClick={() => deleteFeedback(params.id)}
				>
					<FiTrash2 color="purple"/>
				</button>
			</Link>
			<div className="num-display">{params.rating}</div>
			<h2>
				Post text: <br /> <i>{params.name}</i>
			</h2>
			<Link to={"/"}>Back Home</Link>
		</Card>
	);
}

export default Post;
