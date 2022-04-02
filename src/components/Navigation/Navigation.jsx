import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/">Main</NavLink>
				</li>
				<li>
					<NavLink to="/statisctics">Statisctics</NavLink>
				</li>
			</ul>
		</nav>
	);
}
