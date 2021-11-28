import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext.js";

function Navigation() {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav>
      <ul>
        {user ? (
          <>
            <Link to="/apply">Apply</Link>
            <Link to="/" onClick={logout}>
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
