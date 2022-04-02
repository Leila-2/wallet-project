import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
	return (
		<nav>
			<NavLink to="/">Login</NavLink>
			<NavLink to="/register">Register</NavLink>
			<NavLink to="/main">Main</NavLink>
			<NavLink to="/statisctics">Statisctics</NavLink>
		</nav>
	);
}
