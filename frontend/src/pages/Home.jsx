import PropTypes from "prop-types";
import UserEmailLogin from "../components/home/UserEmailLogin";
import UserPassword from "../components/home/UserPassword";
import NetworkFooter from "../components/NetworkFooter";
import ButtonConnect from "../components/home/ButtonConnect";
import LogoNutriDrive from "../assets/NutriDrive_logo_home.png";

import "../style/Home.css";

function Home({ handleClickUser }) {
  return (
    <div className="body">
      <main>
        <img className="imgLogoHome" src={LogoNutriDrive} alt="logo" />
        <div className="formConnect">
          <UserEmailLogin handleClickUser={handleClickUser} />
          <UserPassword />
          <ButtonConnect />
        </div>
      </main>
      <NetworkFooter />
    </div>
  );
}

Home.propTypes = {
  handleClickUser: PropTypes.func.isRequired,
};
export default Home;
