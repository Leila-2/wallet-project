import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authSelectors from "../../store/auth/authSelectors";

export default function PrivateRoute({ children, redirectTo = "/login" }) {
	const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
	return isLoggedIn ? children : <Navigate to={redirectTo} />;
}
