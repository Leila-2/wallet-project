import React from "react";
import Logo from "../../../../components/Logo";
import StyledRegisterHeader from "./StyledRegisterHeader";

const RegisterHeader = ({ text }) => {
	return (
		<StyledRegisterHeader>
			<div className="header-wrapper">
				<Logo svg="header-logo" />
				<h2 className="header-title">{text}</h2>
			</div>
		</StyledRegisterHeader>
	);
};

export default RegisterHeader;
