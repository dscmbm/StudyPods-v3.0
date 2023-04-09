import React, { useEffect } from "react";
import avatar from "../assets/profile.png";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { profileValidation } from "../helper/validate";
import convertToBase64 from "../helper/convert";
import useFetch2 from "../hooks/contest.hook";
import { updateUser } from "../helper/helper";
import { Link, useNavigate } from 'react-router-dom'

import styles from "../styles/Username.module.css";
import extend from "../styles/Profile.module.css";
import Ques from "./Ques";



export default function ContestPage() {
  const [{ isLoading, apiData, serverError }] = useFetch2();
  
  if (isLoading) return <h1 className="text-2xl font-bold">isLoading</h1>;
  if (serverError)
    return <h1 className="text-xl text-red-500">{serverError.message}</h1>;
  return (
    <>
    <div style={{ backgroundColor: "#f8ddfc" }}>
    <Ques
     contestId={ apiData?.contestId || ""}
     ques1d={apiData?.ques1d || ""}
     ques1i={apiData?.ques1i || ""}
     ques1o={apiData?.ques1o || ""}
     ques2d={apiData?.ques2d || ""}
     ques2i={apiData?.ques2i || ""}
     ques2o={apiData?.ques2o || ""}
     ques3d={apiData?.ques3d || ""}
     ques3i={apiData?.ques3i || ""}
     ques3o={apiData?.ques3o || ""}
     start={apiData?.start || ""}
     end={apiData?.end || ""}
    />
      {/* <div className="container mx-auto">
        <div className="card my-3">
          <h5 className="card-header">Featured</h5>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card my-3">
          <h5 className="card-header">Featured</h5>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card">
          <h5 className="card-header">Featured</h5>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div> */}
      </div>
    </>
  );
}

//  contestPage
