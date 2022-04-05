import React from "react";
import StyledAuthContentContainer from "./StyledAuthContentContainer";

const AuthContentContainer = ({ children, authContainer }) => {
	return (
		<StyledAuthContentContainer>
			<div className={`${authContainer}`}>{children}</div>
		</StyledAuthContentContainer>
	);
};

export default AuthContentContainer;
