import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import Card from "../../Shared/Card";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Post({ handleDelete }) {
	const params = useParams();

	return (
		<Card>
			<Link to={"/"}>
				<button
					className="close"
					onClick={() => handleDelete(params.id)}
				>
					<FaTimes />
				</button>
			</Link>
			<div className="num-display">{params.rating}</div>
            <h2>Post text: <br /> <i>{params.name}</i></h2>
			<Link to={"/"}>Back Home</Link>
		</Card>
	);
}

Post.propTypes = {};

export default Post;
