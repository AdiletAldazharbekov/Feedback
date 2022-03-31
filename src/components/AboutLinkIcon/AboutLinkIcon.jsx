import React from "react";
import PropTypes from "prop-types";
import { FaUserTie } from "react-icons/fa";
import {Link} from 'react-router-dom'

function AboutLinkIcon(props) {
	return (
		<div className="about-link">
			<Link to={"/"}>
				<FaUserTie size={30} />
			</Link>
		</div>
	);
}

AboutLinkIcon.propTypes = {};

export default AboutLinkIcon;
