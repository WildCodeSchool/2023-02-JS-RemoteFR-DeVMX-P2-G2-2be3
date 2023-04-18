/* eslint-disable import/no-unresolved */
import LogoFacebook from "@assets/facebook.png/";
import LogoLinkedin from "@assets/linkedin.png/";
import LogoTwitter from "@assets/twitter.png/";
import LogoGithub from "@assets/github.png/";

import "../style/Footer.css";

function NetworkFooter() {
  return (
    <footer className="footer">
      <p className="NutriDrive"> &copy; NutriDrive</p>
      <div className="socialNet">
        <a href="https://www.facebook.com/WildCodeSchool/">
          <img src={LogoFacebook} alt="facebook" />
        </a>
        <a href="https://www.linkedin.com/school/wild-code-school/?originalSubdomain=fr">
          <img src={LogoLinkedin} alt="linkedin" />
        </a>
        <a href="https://twitter.com/WildCodeSchool?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
          <img src={LogoTwitter} alt="twitter" />
        </a>
        <a href="https://github.com/WildCodeSchool">
          <img src={LogoGithub} alt="github" />
        </a>
      </div>
    </footer>
  );
}

export default NetworkFooter;
