import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
import { Link } from "react-router-dom";

const Header = (props) => {
    const { bgcolor, ht } = props;
  return (
       
        <div className="headercomp hideit" style={{ backgroundColor: bgcolor, height: ht }}>
            <div className="comtopleft">
                <Link to="/"><h1 className='carwallah'>CarWallah</h1></Link>
            </div>
            <div className="middlecomp">
                <Link to="/"><div className="middleacomp">Home</div></Link>
                <Link to="/Interactive"><div className="middleacomp">Learn</div></Link>
                <Link to="/quiz"><div className="middleacomp">Quiz</div></Link>
                <Link to="/Contactus"><div className="middleacomp">Contact</div></Link>
            </div>
            <div className="tr_com">
                <button><Link to="/login"><h5 className='h5comp'>SIGN IN</h5></Link></button>
                <button><Link to="/register"><h5 className='h5comp'>REGISTER</h5></Link></button>
            </div>
        </div>
    
  )
}

export default Header
