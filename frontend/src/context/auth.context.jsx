import { createContext, useEffect, useState } from "react";
import { api } from "../api/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadingStoreDate = async () => {
      const storageToken = localStorage.getItem("@Auth:token");

      if (storageToken) {
        setUser(storageToken);
      }
    };
    loadingStoreDate();
  });

  const signIn = async (email, senha) => {
    try {
      const response = await api
        .post("/auth/login", { email, senha })
        .then((response) => {
          const { token_acesso } = response.data;

          api.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${token_acesso}`;

          localStorage.setItem("@Auth:token", token_acesso);
          setUser(token_acesso);
        });
    } catch (error) {
      return error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signed: !!user,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
