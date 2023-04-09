import React, { useState } from "react";


export default function Ques (props) {
    let {
        contestId,
        ques1d,
        ques1i,
        ques1o,
        ques2d,
        ques2i,
        ques2o,
        ques3d,
        ques3i,
        ques3o,
        start,
        end,
    } = props;
    return(
    
        <div style={{ backgroundColor: "#f8ddfc", height:"200vh"}}>
        <div className="container mx-auto pt-24 font-semibold">
        <h5>Contest No. - {contestId}</h5>
        <div className="card my-3">
          <h5 className="card-header">Q1</h5>
          <div className="card-body">
            <h5 className="card-title">Q-{ques1d}</h5>
            <p className="card-text">
              Input - {ques1i}
            </p>
            <p className="card-text">
            Output - {ques1o}
            </p>
            
          </div>
        </div>
        
      <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500 ">
        Solve Q1
      </button>
        <div className="card my-3">
          <h5 className="card-header">Q2</h5>
          <div className="card-body">
            <h5 className="card-title">Q-{ques2d}</h5>
            <p className="card-text">
            Input - {ques2i}
            </p>
            <p className="card-text">
            Output - {ques2o}
            </p>
            
          </div>
        </div>
        <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500 ">
        Solve Q2
      </button>
        <div className="card my-3">
          <h5 className="card-header">Q3</h5>
          <div className="card-body">
            <h5 className="card-title">Q-{ques3d}</h5>
            <p className="card-text">
            Input - {ques3i}
            </p>
            <p className="card-text">
            Output - {ques3o}
            </p>
            
          </div>
        </div>
        <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500 mb-5">
        Solve Q3
      </button>
      </div>

    </div>
    
    );
};


