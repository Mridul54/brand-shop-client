import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../components/provider/AuthProvider";


const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
    .then(() => console.log('Successfully logout'))
    .catch(error => console.error(error))
  }

  

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addProduct">Add Product</NavLink></li>
        <li><NavLink to="/myCart">My Cart</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/registration">Register</NavLink></li>
        
    </>
    return (
        <div className="navbar bg-emerald-100 rounded-lg h-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                       {navLinks}
                    </ul>
                </div>
                <div>
                    <img className='h-16 w-52 absolute'  src={logo} alt="" />
                    <h3 className="text-red-600 font-bold text-xs relative left-[74px] top-2"><span>Technology</span> <br /> <span className=" ml-6">&</span> <br /> Electronics</h3>
                   
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
            {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User Icon"
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <img
                  src="https://i.ibb.co/QmgzZ1N/Sample-User-Icon.png"
                  alt="Default User Icon"
                  className="w-8 h-8 rounded-full"
                />
              )}
              <span className="text-sm mr-2 lg:text-lg text-gray-800">
                {user.displayName || user.email}
              </span>
            </div>
            <button
              onClick={handleSignOut}
              className="btn bg-black  text-white hover:bg-blue-100"
            >
              Log out
            </button>
          </>
        ) : (
          <Link to={'/login'}>
            <button className="btn bg-black text-white hover:bg-blue-100">
              Login
            </button>
          </Link>
        )}
        
                
            </div>
        </div>
    );
};

export default Navbar;