import React, { useState } from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
// const loggedInUser = (boolVal)=>{
//     return boolVal ;
// }
const Title =()=>{
    return( 
    <div className='title'>
        <a  href='/'><img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"/>
        </a> 
        <h1>Foodvilla</h1>
    </div>
    )
}
const Header = ()=>{
    const [loggedUser,setLoggedUser] = useState(true);
    const isOnline = useOnline();
    return(
        <div className='header'>
            <Title/>
            <div className="nav-items">
                <ul>
                    <div>{isOnline?"✅":"🛑"}</div>
                    <Link><li>Home</li></Link>
                    <Link to='/about'><li>About</li></Link>
                    <Link to='/contact'><li>Contact</li></Link>
                    <Link><li>Cart</li></Link>
                    <Link to="/instamart"><li>InstaMart</li></Link>
                </ul>
            </div>
            <div>
                {loggedUser? <button onClick={()=>setLoggedUser(false)}>Log Out</button>
                :<button onClick={()=>setLoggedUser(true)}>Log in</button>}
            </div>
        </div>
    );
}
export default Header;