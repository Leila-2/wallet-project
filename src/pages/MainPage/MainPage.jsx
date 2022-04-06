import MainBg  from "../../components/MainBg/MainBg";
import Navigation from "../../components/Navigation/Navigation";
import Header from "./components/Header/Header";

export default function MainPage() {
	return (
		<>
			<Navigation />
    <Header/>
      <MainBg>
			<h1>MainPage</h1>
			</MainBg>
		</>
	);
}
