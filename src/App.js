import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import Navigation from "./components/Navigation/Navigation";

const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const StatisticsPage = lazy(() =>
	import("./pages/StatisticsPage/StatisticsPage")
);

function App() {
	return (
		<>
			<GlobalStyles />

			<Navigation />

			<Suspense fallback={<p>Loading...</p>}>
				<Routes>
					<Route path="/*" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/main" element={<MainPage />} />
					<Route path="/statisctics" element={<StatisticsPage />} />
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
