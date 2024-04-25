import React from 'react'
import './ContactUs.css'
import Header from '../../components/Header/Header'
import { assets } from '../../assets/assets'
import Footer from '../../components/Footer/Footer'
 
const ContactUs = () => {
  return (
    <>
        <Header/>
        <div className="background">
            <div className="left_contact">
                <div className="contact_us_container">
                    <div className="screen">
                        <div className="screen-header">
                            <div className="screen-header-left">
                                <div className="screen-header-button close"></div>
                                <div className="screen-header-button maximize"></div>
                                <div className="screen-header-button minimize"></div>
                            </div>
                            <div className="screen-header-right">
                                <div className="screen-header-ellipsis"></div>
                                <div className="screen-header-ellipsis"></div>
                                <div className="screen-header-ellipsis"></div>
                            </div>
                        </div>
                    <div className="screen-body">
                        <div className="screen-body-item left">
                        <div className="app-title">
                            <span>CONTACT</span>
                            <span>US</span>
                        </div>
                        <div className="app-contact">CONTACT INFO : +91 9971320165</div>
                        </div>
                        <div className="screen-body-item">
                        <div className="app-form">
                            <div className="app-form-group">
                            <input className="app-form-control" placeholder="NAME" />
                            </div>
                            <div className="app-form-group">
                            <input className="app-form-control" placeholder="EMAIL" />
                            </div>
                            <div className="app-form-group">
                            <input className="app-form-control" placeholder="CONTACT NO" />
                            </div>
                            <div className="app-form-group message">
                            <input className="app-form-control" placeholder="MESSAGE" />
                            </div>
                            <div className="app-form-group buttons">
                            <button className="app-form-button">CANCEL</button>
                            <button className="app-form-button">SEND</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="image_curvy">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 214 320"><path fill="#c7c7c7" fill-opacity="1"  d="M0,32L10.9,58.7C21.8,85,44,139,65,149.3C87.3,160,109,128,131,117.3C152.7,107,175,117,196,122.7C218.2,128,240,128,262,133.3C283.6,139,305,149,327,144C349.1,139,371,117,393,112C414.5,107,436,117,458,122.7C480,128,502,128,524,138.7C545.5,149,567,171,589,154.7C610.9,139,633,85,655,90.7C676.4,96,698,160,720,181.3C741.8,203,764,181,785,165.3C807.3,149,829,139,851,149.3C872.7,160,895,192,916,181.3C938.2,171,960,117,982,106.7C1003.6,96,1025,128,1047,122.7C1069.1,117,1091,75,1113,48C1134.5,21,1156,11,1178,26.7C1200,43,1222,85,1244,96C1265.5,107,1287,85,1309,96C1330.9,107,1353,149,1375,186.7C1396.4,224,1418,256,1429,272L1440,288L1440,320L1429.1,320C1418.2,320,1396,320,1375,320C1352.7,320,1331,320,1309,320C1287.3,320,1265,320,1244,320C1221.8,320,1200,320,1178,320C1156.4,320,1135,320,1113,320C1090.9,320,1069,320,1047,320C1025.5,320,1004,320,982,320C960,320,938,320,916,320C894.5,320,873,320,851,320C829.1,320,807,320,785,320C763.6,320,742,320,720,320C698.2,320,676,320,655,320C632.7,320,611,320,589,320C567.3,320,545,320,524,320C501.8,320,480,320,458,320C436.4,320,415,320,393,320C370.9,320,349,320,327,320C305.5,320,284,320,262,320C240,320,218,320,196,320C174.5,320,153,320,131,320C109.1,320,87,320,65,320C43.6,320,22,320,11,320L0,320Z"></path></svg>
            </div>
            <div className="right_cont_login">
                <div className="cont_ins_rc">
                    <h1>Feedback Form</h1>
                    <form action="" className='form_fb'>
                        <div className="first">
                            <div className="first_title">
                                <h3>Whats your name?</h3>
                            </div>
                            <div className="first_input">
                                <input type="text" name="fname_input" id="fname_input" placeholder='First Name'/>
                                <input type="text" name="lname_input" id="lname_input" placeholder='Last Name'/>
                            </div>
                        </div>
                        <div className="first">
                            <div className="second_title">
                                <h3>Whats your Email ID? </h3>
                            </div>
                            <div className="second_input">
                                <input type="email" name="email_input" id="email_input" placeholder='Email Id'/>
                            </div>
                        </div>
                        <div className="first">
                            <div className="third_title">
                                <h3>How did you find our website?</h3>
                            </div>
                            <div className="third_input">
                                <select name="review" id="review">
                                    <option value="0">-- Select an Option --</option>
                                    <option value="1">Average</option>
                                    <option value="2">Good</option>
                                    <option value="3">Very Good</option>
                                    <option value="4">Excellent</option>
                                </select>
                            </div>
                        </div>
                        <div className="first">
                            <div className="fourth_title">
                                <h3>Do you have anything to say?</h3>
                            </div>
                            <div className="fourth_input">
                                <textarea name="message" id="message" cols="30" rows="10"></textarea>
                                <button> Submit </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactUs
