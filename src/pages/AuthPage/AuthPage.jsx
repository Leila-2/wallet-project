import StyledAuthPage from "./StyledAuthPage";
import { Container } from "../../styles/Container";
import image_1 from "../../img/loginPage.png";
import image_2 from "../../img/registerPage.png";
import background_1 from "../../img/ellipse_1.png";
import background_2 from "../../img/ellipse_2.png";
import { useLocation } from "react-router-dom";

export default function AuthPage() {
  const { pathname } = useLocation();

  return (
    <StyledAuthPage>
      <Container>
        <div className="authPage">
          <div
            className="authPage-left-side"
            style={{
              backgroundImage: `url(${background_1})`,
            }}
          >
            <div>
              <img
                src={
                  (pathname === "/login" && image_1) ||
                  (pathname === "/register" && image_2)
                }
                alt="user"
                className="image"
              />
              <h2 className="authPage-title">Finance App</h2>
            </div>
          </div>
          <div
            className="authPage-right-side"
            style={{
              backgroundImage: `url(${background_2})`,
            }}
          >
            {pathname === "/login" && <div className="content">LOGIN</div>}
            {pathname === "/register" && (
              <div className="content">REGISTER</div>
            )}
          </div>
        </div>
      </Container>
    </StyledAuthPage>
  );
}
