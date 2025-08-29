import React, { useContext, useState } from "react";
import User from "../components/objects/User";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const login = async (username, password) => {
    const user = new User(username, password);
    user.self = true;
    setCurrentUser(user);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const updateUser = (updatedUser) => {
    if (currentUser) {
      setCurrentUser((prevUser) => ({
        ...prevUser,
        ...updatedUser,
      }));
    }
  };

  const value = {
    currentUser,
    login,
    logout,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
