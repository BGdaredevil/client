import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider(props) {
  const [user, setUser] = useState(localStorage.getItem("token"));

  const login = (userData) => {
    setUser(JSON.stringify(userData));
    localStorage.setItem("token", JSON.stringify(userData));
  };

  const logout = () => {
    console.log("called");
    setUser(undefined);
    localStorage.removeItem("token");
  };

  const getUser = () => {
    if (user) {
      return JSON.parse(user);
    } else {
      return null;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, getUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
