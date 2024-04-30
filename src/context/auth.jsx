import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    return {
      user: user ? JSON.parse(user) : null,
      token: token || "",
    };
  });

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = auth.token;
  }, [auth.token]);

  const updateAuth = (newAuth) => {
    setAuth(newAuth);
    localStorage.setItem("token", newAuth.token);
    localStorage.setItem("user", JSON.stringify(newAuth.user));
  };

  return (
    <AuthContext.Provider value={[auth, updateAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
