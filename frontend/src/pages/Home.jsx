/* eslint-disable import/no-unresolved */
import UserEmail from "@components/UserEmail";
import UserPassword from "@components/UserPassword";
import NetworkFooter from "@components/NetworkFooter";

function Home() {
  return (
    <div>
      <header />
      <UserEmail />
      <UserPassword />
      <footer>
        <NetworkFooter />
      </footer>
    </div>
  );
}

export default Home;
