import React from "react";
import AuthContentContainer from "../../components/AuthContentContainer";
import RegisterForm from "../../components/RegisterForm";
import RegisterHeader from "../../components/RegisterHeader/RegisterHeader";

const RegisterPage = () => {
	return (
		<>
			<AuthContentContainer authContainer="SignupFormContainer">
				<RegisterHeader text={"Wallet"} />
				<RegisterForm />
			</AuthContentContainer>
		</>
	);
};

export default RegisterPage;
