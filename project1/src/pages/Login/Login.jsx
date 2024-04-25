import React from 'react'
import './Login.css' 
import Header from '../../components/Header/Header'
import { assets } from '../../assets/assets'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div>
      <Header bgcolor="white" ht="0px"/>
      <div className="login_cont">
        <div className="login-box">
          <div className="login-left">
            <h1>INFORMATION</h1>
            <div className="whitecol">
             Welcome to CarWallah. Login yourself to get ultimate benefits of our and your own informational website. You will get everything here which you have been craving for. Here we provide you with ultimate knowledge of CAR AND ITS INTERNAL PARTS AND ITS WORKING 
            </div>
            <div className="wannareg">
              <Link to="/register"><button className='indiv2'>Register...</button></Link>
            </div>
          </div>
          <div className="login-right">
            <h1>LOGIN FORM </h1>
            <form action="" className='login_form'>
                <div className="login_first">
                  <div className="login_first_text">
                    <h2>Username</h2>
                  </div>
                  <div className="login_first_ip">
                    <input type="text" name="login_username" id="login_username" placeholder='Phone or Email'/>
                  </div>
                </div>
                <div className="login_first">
                  <div className="login_first_text">
                    <h2>Password</h2>
                  </div>
                  <div className="login_first_ip">
                    <input type="password" name="login_password" id="login_password" placeholder='Password'/>
                  </div>
                </div>
              <button className='login-but'>Login</button>
            </form>
          </div>
        </div>
        <img src={assets.login1234} className='login_photo' />
      </div>
      <Footer/>
    </div>
  )
}

export default Login
