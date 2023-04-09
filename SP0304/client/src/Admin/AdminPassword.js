import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/profile.png';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { adminpasswordValidate } from '../helper/validate'
import useFetch from '../hooks/fetch.hook';
import { useAuthStore } from '../store/store'
import { adminverifyPassword } from '../helper/helper'
import styles from '../styles/Username.module.css';

export default function AdminPassword() {

  const navigate = useNavigate()
  const { username } = useAuthStore(state => state.auth)
  const [{ isLoading, apiData, serverError }] = useFetch(`/user/${username}`)

  const formik = useFormik({
    initialValues : {
        SpecialKey : '',
      password : ''
    },
    validate : adminpasswordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      
      let loginPromise;
      if(values.SpecialKey ==="jbhjbjbwjgbuygwughh7390r7937r8978938diomnkl;dmwl;md.w,d.,wldjkowdoiuq90id90q90d88908209whikwhicnwihcih2iduhi272e897289dd28dh"){
        loginPromise= adminverifyPassword({ username, password : values.password })
      toast.promise(loginPromise, {
        loading: 'Checking...',
        success : <b>Login Successfully...!</b>,
        error : <b>Password Not Match!</b>
      });
      }  

      else{
        error : <b>Password Not Match!</b>
      }

      loginPromise.then(res => {
        console.log(res.data)
        let { Admintoken } = res.data;
        localStorage.setItem('Admintoken', Admintoken);
        navigate('/Dashboard')
      })
    }
  })

  if(isLoading) return <h1 className='text-2xl font-bold'>isLoading</h1>;
  if(serverError) return <h1 className='text-xl text-red-500'>{serverError.message}</h1>

  return (
    <div className="container mx-auto">

      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass}>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Hello {apiData?.firstName || apiData?.username}</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Login as Admin.
            </span>
          </div>

          <form className='py-1' onSubmit={formik.handleSubmit}>
            
              <div className='profile flex justify-center py-4'>
                  <img src={apiData?.profile || avatar} className={styles.profile_img} alt="avatar" />
              </div>

              <div className="textbox flex flex-col items-center gap-6">
              <input {...formik.getFieldProps('SpecialKey')} className={styles.textbox} type="text" placeholder='SpecialKey' />
                  <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder='Password' />
                  <button className={styles.btn} type='submit'>Sign In</button>
              </div>

              {/* <div className="text-center py-4">
                <span className='text-gray-500'>Forgot Password? <Link className='text-red-500' to="/recovery">Recover Now</Link></span>
              </div> */}

          </form>

        </div>
      </div>
    </div>
  )
}
