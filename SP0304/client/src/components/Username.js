import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/profile.png';
import Logo from '../assets/Logo.png'
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { usernameValidate } from '../helper/validate'
import { useAuthStore } from '../store/store'
// import Logo2 from '../assets/logo-no-background1.png' 

import styles from '../styles/Username.module.css';

export default function Username() {

  const navigate = useNavigate();
  const setUsername = useAuthStore(state => state.setUsername);

  const formik = useFormik({
    initialValues : {
      username : ''
    },
    validate : usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      setUsername(values.username);
      navigate('/password')
    }
  })

  return (
    <div style={{ backgroundColor: "#ede9ff" }}>
    <div className="container mx-auto" >

      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass }>

          <div className="title flex flex-col items-center">
            <div className=' content-center justify-between flex flex-nowrap'>
            {/* <a class="navbar-brand" href="#">
      <img src={Logo2} alt="..." height="6"/>
    </a> */}
          <img src={Logo} className={styles.profile_img2} alt="avatar" />
            <h5 className='text-5xl font-bold my-1'>M.B.M University!</h5>
            </div>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Official Contest Website.
            </span>
          </div>

          <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center py-4'>
                  <img src={avatar} className={styles.profile_img} alt="avatar" />
              </div>

              <div className="textbox flex flex-col items-center gap-6">
                  <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username' />
                  <button className={styles.btn} type='submit'>Let's Go</button>
              </div>


              <div className="text-center py-2">
                <span className='text-gray-500'>Don't have an account? <Link className='text-red-500' to="/register">Register Now</Link></span>
              </div>

              <div className="text-center py-1">
                <span className='text-gray-500'>Login as <Link className='text-red-500' to="/AdminLogin">Admin</Link></span>
              </div>

              <div className="text-center py-2">
                <span className='text-gray-500'>Everything is Case Sensative.</span>
              </div>

          </form>

        </div>
      </div>
    </div>
    </div>
  )
}
