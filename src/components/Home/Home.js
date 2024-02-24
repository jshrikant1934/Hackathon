import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.mudule.css";

function Home(props) {
  return (
    <div>
      <div className="Bigbox">
        <div className="Smallbox">
          <div className="containImg">
            <img className="img" src="https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png" />
            <h1 className="heading">GKeep</h1>
          </div>

          <div className="loginup">
            <div className="log">
              <p>
                <span>
                  <h1>
                    <Link to="/login">Login</Link>
                  </h1>
                </span>

              </p>

            </div>
            <div className="sign">
            <p>
                <span>
              <h1>
                <Link to="/signup">Signup</Link>
              </h1>
              </span>

              </p>

            </div>
          </div>
          <h5>Keep Your Note Safe..!</h5>
        </div>
      </div>
    </div>
  );
}

export default Home;
