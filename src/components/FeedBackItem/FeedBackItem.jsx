import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "../../Shared/Card";
import {Link} from 'react-router-dom'

const FeedBackItem = ({ item, handleDelete }) => {

	return (
		<Link to={`/post/${item.rating}/${item.text}/${item.id}`}>
			<Card>
				<div className="num-display">{item.rating}</div>
				<button className="close" onClick={handleDelete}>
					<FaTimes/>
				</button>
				<div className="text-display">{item.text}</div>
			</Card>
		</Link>
	);
};
FeedBackItem.propTypes = {
	item: PropTypes.object.isRequired,
};

export default FeedBackItem;
