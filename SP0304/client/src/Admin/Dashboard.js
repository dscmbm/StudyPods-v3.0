import React from "react";
import { Link, useNavigate } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";
import styles from "../styles/Username.module.css";

import extend from "../styles/Profile.module.css";

function Dashboard() {
  const navigate = useNavigate();

  function userLogout() {
    localStorage.removeItem("Admintoken");
    navigate("/");
  }

  function Contest() {
    navigate("/ContestPage");
  }
  return (
    <>
      
      <div className="container mx-auto">
        <Toaster position="top-center" reverseOrder={false}></Toaster>

        <div className="flex justify-center items-center h-screen">
          <div
            className={`${styles.glass} ${extend.glass}`}
            style={{ width: "45%", paddingTop: "3em" }}
          >
            <div className="title flex flex-col items-center">
              
            <h4 className="text-5xl my-2 font-bold">Admin-Dashboard</h4>
              <button className={styles.btn2} type="submit">
                <div className="text-center py-4">
                  <span className="text-gray-500">
                    <Link className="text-red-500" to="/CreateContest">
                      Create Contest
                    </Link>
                  </span>
                </div>
              </button>

              <button className={styles.btn2} type="submit">
                <div className="text-center py-4 ">
                  <span className="text-gray-500">
                    <Link className="text-red-500" to="/PastContest">
                      Past Contest
                    </Link>
                  </span>
                </div>
              </button>
              <button className={styles.btn2} type="submit">
                <div className="text-center py-4 ">
                  <span className="text-gray-500">
                    <Link className="text-red-500" to="/LeaderBoard">
                      LeaderBoard
                    </Link>
                  </span>
                </div>
              </button>
              <div className="text-center py-4">
              <span className="text-gray-500">
                come back later?{" "}
                <button onClick={userLogout} className="text-red-500" to="/">
                  Logout
                </button>
              </span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
