import { React } from "react";
import { useState } from "react";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../Input";

import { ReactComponent as EmailIcon } from "../../icons/email.svg";
import { ReactComponent as LockIcon } from "../../icons/lock.svg";
import { ReactComponent as NameIcon } from "../../icons/name.svg";

import StyledRegisterForm from "./StyledRegisterForm";

function RegisterForm() {
	// const dispatch = useDispatch();
	const navigate = useNavigate();
	const [password, setPassword] = useState("");

	const validationsSchema = Yup.object({
		email: Yup.string()
			.email("Введите корректный e-mail")
			.required("Обязательное поле для заполнения!"),
		password: Yup.string()
			.min(6, "Пароль должен состоять минимум из 6 символов")
			.max(12, "Пароль должен состоять максимум из 12 символов")
			.required("Обязательное поле для заполнения!"),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref("password")], "Пароли не совпадают")
			.required("Требуется подтверждение пароля!"),
		name: Yup.string()
			.typeError()
			.min(1, "Имя должно состоять минимум из 1 символа")
			.max(12, "Имя должно состоять максимум из 12 символов")
			.required("Обязательное поле для заполнения!"),
	});

	const handleRegister = ({ name, email, password }) => {
		// dispatch();
		navigate("/login");
	};

	return (
		<StyledRegisterForm>
			<Formik
				initialValues={{
					email: "",
					password: "",
					confirmPassword: "",
					name: "",
				}}
				validateOnBlur
				onSubmit={handleRegister}
				validationSchema={validationsSchema}
			>
				{({ handleChange, handleBlur, values }) => (
					<Form className="form">
						<Input
							label={<EmailIcon width={24} height={24} />}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
							name="email"
							type="email"
							placeholder="E-mail"
							className="field"
							id="email"
						/>
						<Input
							label={<LockIcon width={24} height={24} />}
							name="password"
							type="password"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
							placeholder="Пароль"
							className="field"
							id="password"
							onInput={(e) => setPassword(e.target.value)}
						/>
						<Input
							label={<LockIcon width={24} height={24} />}
							name="confirmPassword"
							type="password"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.confirmPassword}
							placeholder="Подтвердите пароль"
							className="field"
						/>

						<Input
							label={<NameIcon width={24} height={24} />}
							name="name"
							type="text"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.name}
							placeholder="Ваше имя"
							className="field"
							id="name"
						/>

						{/* Buttons */}
					</Form>
				)}
			</Formik>
		</StyledRegisterForm>
	);
}

export default RegisterForm;
