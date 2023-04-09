import React from "react";
import { useNavigate } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { contestValidation } from "../helper/validate";

import { registerContest } from "../helper/helper";

import styles from "../styles/Username.module.css";
function CreateContest() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      contestId : "",
      ques1d : "",
      ques1i : "",
      ques1o : "",
      ques2d : "",
      ques2i : "",
      ques2o : "",
      ques3d : "",
      ques3i : "",
      ques3o : "",
      start : "",
      end : "",
    },
    // validate: contestValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values);
      let registerPromise = registerContest(values);
      toast.promise(registerPromise, {
        loading: "Creating...",
        success: <b>Contest Register Successfully...!</b>,
        error: <b>Could not Register Contest..</b>,
        
      });
      
      registerPromise.then(function () {
        navigate("/Dashboard");
      });
    },
  });

  return (
    <>
      <div className="container mx-auto ">
        <Toaster position="top-center" reverseOrder={false}></Toaster>

        <div className="flex justify-center items-center pb-5">
          <div className={styles.glass2} style={{ paddingTop: "3em" }}>
            <div className="title flex flex-col items-center"></div>
            <h4 className="text-5xl text-center font-bold">Create Contest</h4>
            <form className="py-1" onSubmit={formik.handleSubmit}>
              <div className="textbox flex flex-col items-center my-5 gap-6">
                <input
                  {...formik.getFieldProps("contestId")}
                  className={styles.textbox2}
                  type="text"
                  placeholder="contest Id*"
                />
                <input
                  {...formik.getFieldProps("ques1d")}
                  className={styles.textbox2}
                  type="text"
                  placeholder="Q1 Description*"
                />
                <input
                  {...formik.getFieldProps("ques1i")}
                  className={styles.textbox2}
                  type="text"
                  placeholder="Q1 Input Test Cases*"
                />
                <input
                  {...formik.getFieldProps("ques1o")}
                  className={styles.textbox2}
                  type="text"
                  placeholder="Q1 Expected Output*"
                />
                <input
                  {...formik.getFieldProps("ques2d")}
                  className={styles.textbox2}
                  type="text"
                  placeholder="Q2 Description*"
                />
                <input
                  {...formik.getFieldProps("ques2i")}
                  className={styles.textbox2}
                  type="text"
                  placeholder="Q2 Input Test Cases*"
                />
                <input
                  {...formik.getFieldProps("ques2o")}
                  className={styles.textbox2}
                  type="text"
                  placeholder="Q2 Expected Output*"
                />
                <input
                  {...formik.getFieldProps("ques3d")}
                  className={styles.textbox2}
                  type="text"
                  placeholder="Q3 Description*"
                />
                <input
                  {...formik.getFieldProps("ques3i")}
                  className={styles.textbox2}
                  type="text"
                  placeholder="Q3 Input Test Cases*"
                />
                <input
                  {...formik.getFieldProps("ques3o")}
                  className={styles.textbox2}
                  type="text"
                  placeholder="Q3 Expected Output*"
                />
                <input
                  {...formik.getFieldProps("start")}
                  className={styles.textbox2}
                  type="time"
                  placeholder="start*"
                />
                <input
                  {...formik.getFieldProps("end")}
                  className={styles.textbox2}
                  type="time"
                  placeholder="end*"
                />
                <button className={styles.btn} type="submit">
                  Create Contest
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateContest;
