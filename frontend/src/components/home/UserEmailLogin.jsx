import PropTypes from "prop-types";

function UserEmailLogin({ handleClickUser }) {
  return (
    <div>
      <input
        className="inputEmail"
        type="email"
        placeholder="Entrez votre adresse email"
        onChange={(e) => handleClickUser(e.target.value)}
      />
    </div>
  );
}

UserEmailLogin.propTypes = {
  handleClickUser: PropTypes.func.isRequired,
};

export default UserEmailLogin;
