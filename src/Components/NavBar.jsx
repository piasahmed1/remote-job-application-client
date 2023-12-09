import { Link, NavLink } from "react-router-dom";
import banner from '../assets/banner.jpg'
import logo from '../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const NavBar = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(() => console.log('user log out Successfully'))
    .catch(error => console.error(error))
  }

  const navlinks = <>
        <div className='flex gap-2'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/register'>Register</NavLink></li>
            <li><NavLink to='/allJobs'>All Jobs</NavLink></li>
            <li><NavLink to='/appliedJobs'>Applied Jobs</NavLink></li>
            <li><NavLink to='/addJobs'>Add Jobs</NavLink></li>
            <li><NavLink to='/myJobs'>My Jobs</NavLink></li>
            <li><NavLink to='/blogs'>Blogs</NavLink></li>
            
            { user && <>
              
            </>}
            
        </div>
        </>


  return (
<div className="navbar bg-orange-600">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        {/* <svg xmlns={banner1} className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}

        <img src={banner} alt="" />
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlinks}
      </ul>
    </div>
    {/* <a className="btn btn-ghost normal-case text-xl">Assignment-11</a> */}
    <img className="w-14 h-12" src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <>
      <span>{user.email}</span>
      <a onClick={handleLogOut} className="btn btn-sm">Sign Out</a>
      </> 

      : <Link to="/login">
        <button className="btn btn-sm">Login</button>
      </Link>
    }
    
  </div>
</div>
  );
};

export default NavBar;