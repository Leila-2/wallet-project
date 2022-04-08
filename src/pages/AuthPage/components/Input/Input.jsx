import { React } from "react";
import { ErrorMessage, useField } from "formik";
import StyledInput from "./StyledInput";

const Input = ({ label, ...props }) => {
	const [field] = useField(props);
	return (
		<StyledInput>
			<div className="container-field">
				<label htmlFor={field.name} className="label">
					{label}
					<input {...field} {...props} autoComplete="off" />
				</label>
				<ErrorMessage
					component="div"
					name={field.name}
					style={{ color: "#FF6596" }}
					className="field-error"
				/>
			</div>
		</StyledInput>
	);
};

export default Input;
