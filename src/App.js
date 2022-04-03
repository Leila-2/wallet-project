import { Container } from "./styles/Container";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
// import { useSelector } from "react-redux";
// import PrivateRoute from "./components/Routes/PrivateRoute";
// import PublicRoute from "./components/Routes/PublicRoute";
// import authSelectors from "./store/auth/auth-selectors";

const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const StatisticsPage = lazy(() =>
	import("./pages/StatisticsPage/StatisticsPage")
);

function App() {
	// const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

	return (
		// !isFetchingCurrentUser && (
		<>
			<GlobalStyles />
			<Suspense fallback={<p>Loading...</p>}>
				<Container>
					<Routes>
						<Route path="/login" element={<LoginPage />} />
						<Route path="/register" element={<RegisterPage />} />
						<Route path="/" element={<MainPage />} />
						<Route path="/statistics" element={<StatisticsPage />} />
					</Routes>
				</Container>
			</Suspense>
		</>
	);
	// );
}

export default App;
