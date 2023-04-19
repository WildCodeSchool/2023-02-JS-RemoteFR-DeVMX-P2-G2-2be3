/* eslint-disable import/no-unresolved */
import UserEmail from "@components/home/UserEmail";
import UserPassword from "@components/home/UserPassword";
import NetworkFooter from "@components/NetworkFooter";
import ButtonConnect from "@components/home/ButtonConnect";

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
      <NetworkFooter />
    </div>
  );
}

export default Home;
