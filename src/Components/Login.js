import React, { useCallback, useContext } from "react";
//import { withRouter, Link } from "react-router";
import { useNavigate } from "react-router";
import app from "../base.js";
import { AuthContext } from "./Auth.js";
import styled from "styled-components";


const Login = ({ history }) => {
    const navigate = useNavigate();
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const currentUser = useContext(AuthContext);

  if (currentUser) {
    navigate("/");
  }

  return (
    // <Container>
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",gap:"1rem",alignItems:"center",marginTop:"200px"}}>
      <h1>Log in</h1>
      <form onSubmit={handleLogin} style={{display:"flex",flexDirection:"column",justifyContent:"center",gap:"1rem",alignItems:"center"}}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
    //</Container> 
  );
};

export default Login;

// const Container = styled.div`
// height: 100vh;
// width: 100vw;
// display: flex;
// flex-direction : column;
// justify-content: center;
// gap: 1rem;
// align-items: center;
// `;
