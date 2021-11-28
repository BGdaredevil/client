import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../contexts/authContext.js";
import passGenerator from "../../services/passService.js";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const cleanData = Object.entries(data).reduce((a, [k, v]) => {
      a[k] = v.trim();
      return a;
    }, {});
    console.log(passGenerator(cleanData.username));
    if (Object.values(cleanData).includes("")) {
      alert("Please fill out all fields");
      return;
    }

    if (isNaN(data.username)) {
      alert("please use your personal ID number to login");
      return;
    }

    if (passGenerator(cleanData.username) !== cleanData.password) {
      alert("Username or password do not math");
      // console.log(passGenerator(cleanData.username));
      return;
    }

    login({ username: cleanData.username });
    navigate("/");
    // setP(passGenerator(data.username));
  };

  return (
    <section className="login">
      <div className="form-container">
        <h1>Login</h1>
        <form method="post" onSubmit={onSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="password" />
          <input type="submit" value="Login" />
        </form>
      </div>
    </section>
  );
}

export default Login;
