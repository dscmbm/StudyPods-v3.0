import React, { useState } from "react";
import Logo from "../image/Logo.png";
import code from "../image/code.png";
import Typewritter from "typewriter-effect";
import trophy5 from "../image/Trophy3.png";
import trophy from "../image/AA2.png";
import trophy2 from "../image/BB.png";
import trophy3 from "../image/CC.png";
import { FaPhoneAlt, FaEnvelope, FaPrint } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function LandingPage() {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  // const navigate = useNavigate();
  const Data = [
    {
      id: 1,
      title: "CodeArena - Participating in Contest..",
      image: trophy3,
      tags: [],
      description1:
        "Contests provide a structured environment for programmers to test and improve their skills, solve problems under time pressure, and compare their performance against other participants.",
      description2:
        "By participating in contests, you can also learn new programming concepts and techniques, as well as become familiar with different types of problems. Moreover, participating in contests can help you build a strong portfolio of coding accomplishments, which can be valuable for future job opportunities or academic pursuits.",
    },
    {
      id: 2,
      title: "Consistency - Analysing the problem..",
      image: trophy,
      tags: [],
      description1:
        "Consistently participating in coding contests helps in preparing for technical interviews. It builds problem-solving skills, improves accuracy and efficiency, and boosts confidence. ",
      description2:
        "It also helps to identify areas that require improvement, allows you to focus on specific topics that need more practice, and develops muscle memory for commonly used techniques and code snippets. Participating in coding contests simulates the interview experience, providing an opportunity to showcase your problem-solving skills and develop confidence in your abilities.",
    },
    {
      id: 3,
      title: "Upsolving - Breaking barrier..",
      image: trophy2,
      tags: [],
      description1:
        "Upsolving after a contest helps in analyzing problems and preparing for technical interviews. It helps to identify gaps in understanding, reinforces coding concepts, and improves problem-solving skills. ",
      description2:
        "Additionally, it helps to build familiarity with common coding patterns and techniques and prepares for solving problems under time constraints in technical interviews. Solving problems after the contest also helps to identify the most efficient and effective solutions, allowing you to develop better problem-solving strategies.",
    },
  ];
  return (
    <>
      <div className="shapedividers_com-4654">
        <div className="container ">
          <nav className="navbar navbar-expand-lg " id="navbar">
            <div className="container-fluid ">
              <a
                className="navbar-brand text-4xl font-sans font-semibold italic"
                href="#"
              >
                <h3>CodeArena</h3>
              </a>
            </div>
            <button id="login">
              <p className="btn-txt">
                <Link to="/Username">Login</Link>{" "}
              </p>
              <div className="fill-container"></div>
              <span className="first"></span>
              <span className="second"></span>
              <span className="third"></span>
              <span className="fourth"></span>
            </button>
          </nav>
        </div>
      </div>

      {/* hero sec */}
      <div className="grad">
        <div className="container">
          <div className="box">
            <div className="container">
              <div className="row">
                <div className="col-md-6 title">
                  Code Arena
                  <div className="container">
                    <div className="bottom-text">
                      <div className="text">
                        <Typewritter
                          options={{
                            autoStart: true,
                            loop: true,
                            delay: 80,
                            strings: [
                              "The enemy of reliability is complexity.",
                              "When in doubt, use brute force.",
                              "Deleted code is debugged code.",
                            ],
                          }}
                        />
                        <div id="para">
                          <span>
                            <div className="hero">
                              Join the competition and start competing with
                              fellow MBMite's today!
                            </div>

                            <div className="points">
                              We challenge YOU to participate in our contests
                              and become the best. We provide a safe and
                              supportive platform for students to improve their
                              programming skills.
                            </div>
                            <div>
                              <button id="register">
                                <p className="btn-txt">
                                  <Link to="/register">Register</Link>
                                </p>
                                <span className="first"></span>
                                <span className="second"></span>
                                <span className="third"></span>
                                <span className="fourth"></span>
                              </button>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    src={trophy5}
                    // height="2000"
                    // width="1500"
                    alt="Your image"
                    className="img-fluid"
                  />
                  <div className="image-footer">
                    Our mission is to help you improve yourself and land your
                    dream offer. In the past few years, our users have landed
                    jobs at top companies around the world.
                  </div>
                </div>
                 
              </div>
                
            </div>
          </div>
        </div>
      </div>

      {/* mid point */}

      <div className="container ">
        <div className="star font-family: 'Merriweather', serif !important;">
          How to become International Grandmaster, Guardian or 7 Star?
        </div>
      </div>

      <div className="p-10 grid grid-cols-1 md:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {Data.map((item) => (
          <div
            key={item.id}
            className="rounded overflow-hidden shadow-lg dark:shadow-gray-800"
          >
            <img className="w-full" src={item.image} alt="Mountain" />
            <div className="px-4 py-2">
              <div className="font-bold text-xl mb-2 text-center text-purple-800 font-serif">
                {item.title}
              </div>

              <p className="text-purple-800 font-medium font-serif">
                {item.description1.substring(0, 10000)}
              </p>
              {isShowMore && (
                <p className="text-purple-800 font-medium font-serif">
                  {item.description2.substring(0, 10000)}
                </p>
              )}

              <button
                onClick={toggleReadMoreLess}
                className="pb-0 text-purple-800 font-medium font-serif"
              >
                {isShowMore ? "Read Less" : "Read more.."}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* conclusion              */}
      <div className="bg-violet-100 p-px mt-5">
        <div className="container">
          <h2 className="fear text-center text-4xl">
            CodeArena will help you overcome your fear of
            competitive programming..
          </h2>
          <h4 className="fear2 text-2xl">
            {" "}
            <i>
              "CodeArena is not just about winning contests, it's also about
              learning and improving your coding skills. So, even if you don't
              win, you'll still have gained valuable experience and knowledge
              that will help you in future coding challenges."
            </i>
          </h4>
        </div>
      </div>
      <div className="container">
        <div className="inner row">
          <div className="col-sm-6 text-left mt-7" id="upsolving">
            <div className="image-name2 font-semibold text-purple-900">
              Coding Contest..
            </div>
            <div className="mt-4 font-medium">
              Welcome to our weekly competitive programming contest! Are you
              ready to put your coding skills to the test and compete against
              other talented programmers? <b>Every Tuesday</b>, we will be
              hosting a new contest with a variety of challenges designed to
              challenge your problem-solving abilities and push your coding
              skills to the limit..
            </div>
          </div>
          <div className="col-sm-6" id="codingcontest">
            <img src={code} alt="Your image" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* footer */}
      <div>
        {/* 5d54b0 473f89*/}
        <div style={{ backgroundColor: "#37306B" }}>
          <div className="container mt-5">
            <div className="row py-5 text-white">
              <div className="col-md-4 col-sm-12">
                <h4 className="text-warning">CodeArena</h4>
                <p className="mt-2">
                  Every Tuesday!
                  <br />
                  See you at the Contest.
                </p>
              </div>
              <div className="col-md-3 col-sm-12">
                <h4 className="text-warning mb-2">Company</h4>
                {/* <p><Link className="footer-item text-white" to="/about" style={{ cursor: 'pointer', textDecoration: 'none' }}>About Us</Link></p>
                    <p><Link className="footer-item text-white" to="/about" style={{ cursor: 'pointer', textDecoration: 'none' }}>Careers</Link></p>
                    
                    <p><Link className="footer-item text-white" to="/contact us" style={{ cursor: 'pointer', textDecoration: 'none' }}>Contact Us</Link></p>
                    <p><Link className="footer-item text-white" to="/privacy" style={{ cursor: 'pointer', textDecoration: 'none' }}>Privacy Policy</Link></p> */}
                <p>
                  <Link
                    className=" footer-item text-white "
                    to="/Team"
                    style={{ cursor: "pointer", textDecoration: "none" }}
                  >
                    Our Team
                  </Link>
                </p>
                <p>
                  <Link
                    className="footer-item text-white"
                    to="/AdminLogin"
                    style={{ cursor: "pointer", textDecoration: "none" }}
                  >
                    Admin Login
                  </Link>
                </p>
              </div>
              {/* <div className='col-md-3 col-sm-12'>
                    <h4 className='text-warning'>Useful Links</h4>
                    <p style={{ cursor: 'pointer' }}>Sitemap</p>
                    <p style={{ cursor: 'pointer' }}>Shipping Rates</p>
                    <p style={{ cursor: 'pointer' }}>Affililat Program</p>
                    <p style={{ cursor: 'pointer' }}>Affililat Program</p>
                </div> */}
              <div className="col-md-3 col-sm-12">
                <h4 className="text-warning ">Address</h4>
                <div className="flex items-center gap-2 mt-2">
                  <FiMapPin className=" me-2" />
                  M.B.M University Jodhpur (Rajasthan)
                </div>
              </div>
            </div>
            <p className="text-white pb-5">
              @copyright 2023. Made by StudyPods #SP0304
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
