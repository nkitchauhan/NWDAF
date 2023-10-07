import React, { useState } from 'react'
import './changePassword.css'

const ChangePassword = ({ setIndex, index }) => {
   
    const [user, setUser] = useState({
      newPassword: "",
      confirmPassword: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
    }

    return (
      <>
        <div className="trans">
          <div className="trans-content">
            <div className="containerFacebook">
              <form>
                <div className="placeholder">
                  <input
                    className="new-pass"
                    type="email"
                    name="email"
                    placeholder="New Password"
                    value={user.email}
                    onChange={(e) => handleChange(e)}
                  ></input>
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    placeholder="Confirm Password"
                    onChange={(e) => handleChange(e)}
                  ></input>

                  <div className="container-button">
                    <button onClick={(e) => handleSubmit(e)} type="SignIn">
                      SignIn
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
}

export default ChangePassword
