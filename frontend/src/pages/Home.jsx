/* eslint-disable import/no-unresolved */
import UserEmail from "@components/UserEmail";
import UserPassword from "@components/UserPassword";
import NetworkFooter from "@components/NetworkFooter";
import ButtonConnect from "@components/ButtonConnect";

import LogoNutriDrive from "@assets/NutriDrive_logo_home.png/";

import "../style/Home.css";

function Home() {
  return (
    <div className="body">
      <main>
        <img className="imgLogoHome" src={LogoNutriDrive} alt="logo" />
        <div className="formConnect">
          <UserEmail />
          <UserPassword />
          <ButtonConnect />
        </div>
      </main>
      <footer>
        <NetworkFooter />
      </footer>
    </div>
  );
}

export default Home;
