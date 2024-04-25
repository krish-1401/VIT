import React, { useEffect } from 'react'
import './MainPage.css'
import {assets} from '../../assets/assets'
import Typed from 'typed.js';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const MainPage = () => {
    useEffect(() => {
        const typed = new Typed('#element', {
            strings: ['Education', 'Wikipedia'],
            typeSpeed: 150,
            loop: true,
            // backDelay: 1800,
            backSpeed: 90,
        });
    
        // Clean up function to destroy the Typed instance when the component unmounts
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='app'>
            <div className='container'>
                <video autoPlay loop muted className="background-clip">
                    <source src={assets.video1} type="video/mp4" />
                </video>
                <div className="header hideit">
                    <div className="topleft">
                        <h1>CarWallah</h1>
                    </div>
                    <div className="middle">
                        <Link to="/"><div className="middlea">Home</div></Link>
                        <Link to="/Interactive"><div className="middlea">Learn</div></Link>
                        <Link to="/quiz"><div className="middlea">Quiz</div></Link>
                        <Link to="/ContactUs"><div className="middlea">Contact</div></Link>
                    </div>
                    <div className="topright">
                        <button><Link to="/login"><h5>SIGN IN</h5></Link></button>
                        <button><Link to="/register"><h5>REGISTER</h5></Link></button>
                    </div>
                </div>
                <div className="main hideit">
                    <div className="mainleft">
                        <h1>Online</h1>
                        <span id="element"></span>
                        <div className="conttext">
                            <p><i className="fa-solid fa-circle"></i>All About Car Internal Parts and It's Working<i className="fa-solid fa-circle"></i></p>
                        </div>
                    </div>
                    <div className="mainright">
                        <img src={assets.image1} alt="" />
                    </div>
                </div>
                <div className="bottom hideit">
                    <div className="bottomcard">
                        <div className="cardleft">
                            <i className="fa-solid fa-graduation-cap fa-beat" style={{ color: '#63E6BE' }}></i>
                        </div>
                        <div className="cardright">
                            <h2>150+</h2>
                            <h3>Content</h3>
                        </div>
                    </div>
                    <div className="bottomcard">
                        <div className="cardleft">
                            <i className="fa-solid fa-user-graduate fa-beat" style={{ color: '#63E6BE' }}></i>
                        </div>
                        <div className="cardright">
                            <h2>13000+</h2>
                            <h3>Daily Users</h3>
                        </div>
                    </div>
                    <div className="bottomcard">
                        <div className="cardleft">
                            <i className="fa-solid fa-trophy fa-beat" style={{ color: '#63E6BE' }}></i>
                        </div>
                        <div className="cardright">
                            <h2>Awarded</h2>
                            <h3>as Best Site</h3>
                        </div>
                    </div>
                    <div className="bottomcard">
                        <div className="cardleft">
                            <i className="fa-solid fa-face-smile fa-beat" style={{ color: '#63E6BE' }}></i>
                        </div>
                        <div className="cardright">
                            <h2>100%</h2>
                            <h3>Satisfaction</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="main main_middle">
                    <div className="card-middle">
                        <div className="cardimg">
                            <img src={assets.engine} alt="" />
                        </div>
                        <div className="card-middle2">
                            <h2>Engine</h2>
                        </div>
                        <div className="card-end">
                            <h2>An engine or motor is a machine designed to convert one or more forms of energy into mechanical energy. Available energy sources include potential energy, heat energy, chemical energy, electric potential and nuclear energy.</h2>
                        </div>
                        <button className="glow-on-hover mp_1" type="button">
                            <h4><Link to="/interactive">LEARN MORE</Link></h4>
                        </button>
                    </div>
                    <div className="card-middle">
                        <div className="cardimg middleimg">
                            <img src={assets.alternator} alt="" />
                        </div>
                        <div className="card-middle2">
                            <h2>Alternator</h2>
                        </div>
                        <div className="card-end">
                            <h2>An alternator is a type of electric generator used in modern automobiles to charge the battery and to power the electrical system when its engine is running.</h2>
                        </div>
                        <button className="glow-on-hover mp_2" type="button">
                            <h4><Link to="/interactive">LEARN MORE</Link></h4>
                        </button>
                    </div>
                    <div className="card-middle">
                        <div className="cardimg middleimg2">
                            <img src={assets.internalcomb_unscreen} alt="" />
                        </div>
                        <div className="card-middle2">
                            <h2>Combustion Engine</h2>
                        </div>
                        <div className="card-end">
                            <h2>An internal combustion engine (ICE or IC engine) is a heat engine in which the combustion of a fuel occurs with an oxidizer (usually air) in a combustion chamber that is an integral part of the working fluid flow circuit.</h2>
                        </div>
                        <button className="glow-on-hover mp_3" type="button">
                            <h4>LEARN MORE</h4>
                        </button>
                    </div>
                    <div className="card-middle">
                        <div className="cardimg middleimg3">
                            <img src={assets.steering_unscreen} alt="" />
                        </div>
                            <div className="card-middle2">
                        <h2>Steering Wheel</h2>
                        </div>
                        <div className="card-end">
                            <h2>The steering wheel is the part of the steering system that is manipulated by the driver; the rest of the steering system responds to such driver inputs. This can be through direct mechanical contact as in recirculating ball or rack and pinion steering gears</h2>
                        </div>
                        <button className="glow-on-hover mp_4" type="button">
                            <h4><Link to="/interactive">LEARN MORE</Link></h4>
                        </button>
                    </div>
                </div>
                <div className="bottom cont2">
                    <Link to="/quiz"><button><h2 className="designh2">Attempt Quiz</h2></button></Link>
                </div>
            </div>
            <Footer/>
         </div>
        
    )
}

export default MainPage

