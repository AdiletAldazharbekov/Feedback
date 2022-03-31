import React from "react";
import { FaUserTie } from "react-icons/fa";
import {Link} from 'react-router-dom'

function AboutLinkIcon() {
	return (
		<div className="about-link">
			<Link to={"/"}>
				<FaUserTie size={30} />
			</Link>
		</div>
	);
}

export default AboutLinkIcon;
