import React, { useState, useEffect } from 'react';
import './Register.css';
import { assets } from '../../assets/assets';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

const Register = () => {
  const initialValues = { email: "", password: "", confirmPassword: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (!passwordRegex.test(values.password)) {
      errors.password = "Password must contain at least 8 characters including one uppercase letter, one lowercase letter, and one number!";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm password is required!";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match!";
    }

    return errors;
  };

  return (
    <>
      <Header />
      <div className="reg_cont">
        <div className="reg-box">
          <div className="reg-left">
            <h1>INFORMATION</h1>
            <div className="whitecol">
              Welcome to CarWallah. Register yourself to get ultimate benefits of our and your own informational website. You will get everything here which you have been craving for. Here we provide you with ultimate knowledge of CAR AND ITS INTERNAL PARTS AND ITS WORKING 
            </div>
            <div className="haveanacc">
              <Link to="/login"><button className='indiv'>Have an Account?</button></Link>
            </div>
          </div>
          <div className="reg-right">
            <h1>REGISTER FORM </h1>
            <form action="" className='reg_form' onSubmit={handleSubmit}>
              <div className="reg-first">
                <h2 className='fname'>First Name</h2>
                <h2 className='lname'>Last Name</h2>
              </div>
              <div className="reg-first-ip">
                <input type="text" name="reg-fname" id="reg-fname" />
                <input type="text" name="reg-lname" id="reg-lname" />
              </div>
              <div className="reg-second">
                <label>Your Email</label>
              </div>
              <div className="reg-second-ip">
                <input type="email" name="email" id="email" value={formValues.email} onChange={handleChange} />
                <p className='errorsfind'>{formErrors.email}</p>
              </div>
              <div className="reg-third">
                <label>Password</label>
                <label>Confirm Password</label>
              </div>
              <div className="reg-third-ip">
                <input type="password" name="password" id="password" value={formValues.password} onChange={handleChange} />
                <input type="password" name="confirmPassword" id="confirmPassword" value={formValues.confirmPassword} onChange={handleChange} />
              </div>
              <div className="reg-regex">
                <p className='errorsfind'>{formErrors.password}</p>
                <p className='errorsfind'>{formErrors.confirmPassword}</p>
              </div>
              <div className="reg-fourth">
                <div className="chkbox">
                  <input type="checkbox" />
                </div>
                <div className="tnc">
                  I agree to the <span id="bluecol">Terms and Conditions</span>
                </div>
              </div>
              <button className='reg-but'>Register</button>
            </form>
          </div>
        </div>
        <img src={assets.login123} className='imagereg' alt="register" />
      </div>
      <Footer />
    </>
  )
}

export default Register;
