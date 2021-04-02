import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  const Login = {
    id: 12345,
    name: "Juan David Muñoz",
  };

  return (
    <>
      <h1>Login Screen</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => setUser(Login)}>
        login
      </button>
    </>
  );
};
