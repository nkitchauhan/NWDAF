import React, { useState } from 'react'
import './login.css'
import { postCaller } from '../../service/api';
import { setLoggedInToken, setLoggedInUserData } from '../../utils/Helper';
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    /**
     * Login api calling
     */
    const loginApiCall  = async () => {
      const data = {
        email,
        password,
        };
         try {
             const response = await postCaller("/login", data);
             if (response.status === true) {
               setLoggedInToken(response.token);
               setLoggedInUserData(response);
               navigate("/dashboard");
             } else {
               alert(response.msg);
             }
         } catch (error) {
           alert(error.message);
         }
      
    }

    /**
     * validation checking on onSubmit
     */
    const onSubmit = (e) => {
        e.preventDefault();
    
      if (!email || email.length === 0) {
        alert("Please valid email address");
      } else if (!password || password.length === 0) {
        alert("Please enter password.");
      } else {
        loginApiCall();
      }
    };
/**
 * Ui rendering
 */
    return (
      <>
        <section>
          <div className="login-container">
            <h2>NWDAF</h2>

            <form>
              <div className="input-box">
                <span className="icon">
                  <i className="fa-solid fa-envelope"></i>
                </span>

                <input
                  required
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <label htmlFor="email">Enter Your email</label>
              </div>

              <div className="input-box">
                <span className="icon">
                  <i className="fa-solid fa-lock"></i>
                </span>

                <input
                  required
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                ></input>
                <label htmlFor="password">Enter Your password</label>
              </div>

              <button type="submit" onClick={(e)=> onSubmit(e)}>
                SignIn
              </button>
            </form>
          </div>
        </section>
      </>
    );
}

export default LoginScreen
