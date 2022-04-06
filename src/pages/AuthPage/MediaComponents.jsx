import image_1 from "../../img/loginPage.png";
import image_2 from "../../img/RegisterPage.png";
import background_1 from "../../img/Ellipse_1.png";
import background_2 from "../../img/ellipse_2.png";
import background_3 from "../../img/ellipse_3.png";

export const renderDesktop = (path) => {
  return (
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
              (path === "/login" && image_1) ||
              (path === "/register" && image_2)
            }
            alt="user"
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
        {path === "/login" && <div className="content">LOGIN</div>}
        {path === "/register" && <div className="content">REGISTER</div>}
      </div>
    </div>
  );
};

export const renderTablet = (path) => {
  return (
    <div
      className="authPage-tablet"
      style={{
        backgroundImage: `url(${background_1})`,
      }}
    >
      <div
        className="authPage-tablet-pink-background"
        style={{
          backgroundImage: `url(${background_3})`,
        }}
      >
        <div className="authPage-tablet-title-area">
          <img
            src={
              (path === "/login" && image_1) ||
              (path === "/register" && image_2)
            }
            alt="user"
            className="authPage-tablet-image"
          />
          <h2 className="authPage-tablet-title">Finance App</h2>
        </div>
        <div className="authPage-tablet-content-area">
          {path === "/login" && <div className="content">LOGIN</div>}
          {path === "/register" && <div className="content">REGISTER</div>}
        </div>
      </div>
    </div>
  );
};

export const renderMobile = (path) => {
  return (
    <div className="authPage-mobile">
      {path === "/login" && <div className="content">LOGIN</div>}
      {path === "/register" && <div className="content">REGISTER</div>}
    </div>
  );

};
