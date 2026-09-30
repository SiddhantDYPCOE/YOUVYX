import { createContext, useEffect, useState } from "react";

import {
    becomeCreatorApi,
  getMe,
  loginUser,
  registerUser,
} from "../services/auth.api";

import {
  clearAuthData,
  getStoredUser,
  setAuthData,
} from "../utils/storage";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getStoredUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const restoreSession = async () => {
      const token = localStorage.getItem("youvyx_token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await getMe();

        const currentUser = response.data.user;

        setUser(currentUser);

        localStorage.setItem(
          "youvyx_user",
          JSON.stringify(currentUser)
        );
      } catch (error) {
        clearAuthData();
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, []);

  const login = async (credentials) => {
    const response = await loginUser(credentials);

    const { user, token } = response.data;

    setAuthData(token, user);
    setUser(user);

    return response;
  };

  const register = async (data) => {
    const response = await registerUser(data);

    return response;
  };

  const logout = () => {
    clearAuthData();
    setUser(null);
  };

  const becomeCreator = async () => { 
    const response = await becomeCreatorApi(); 
    const { user: updatedUser, token } = response.data; 
    setAuthData(token, updatedUser); 
    setUser(updatedUser); return response; };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        becomeCreator,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};