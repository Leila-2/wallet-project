import StyledAuthPage from "./StyledAuthPage";
import { Container } from "../../styles/Container";
import image from "../../img/loginPage.png";
import background_1 from "../../img/Ellipse_1.png";
import background_2 from "../../img/Rectangle_3.png";
import { useLocation } from "react-router-dom";

export default function AuthPage() {
  const { pathname } = useLocation();

  return (
    <StyledAuthPage>
      <Container>
        <div className="authPage">
          <div
            className="authPage-left-side"
            // style={{
            //   backgroundImage: `url(${background_1})`,
            // }}
          >
            {/* <img src={background_1} alt="ellipse" className="ellipse" /> */}
            <img src={image} alt="user" className="image" />
          </div>
          <div
            className="authPage-right-side"
            style={{
              backgroundImage: `url(${background_2})`,
            }}
          >
            {pathname === "/login" && <div className="content">TEST</div>}
          </div>
        </div>
      </Container>
    </StyledAuthPage>
  );
}
