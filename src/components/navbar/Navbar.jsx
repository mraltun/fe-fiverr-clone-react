import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // Temporary user until backend
  const currentUser = {
    id: 1,
    username: "Murat",
    isSeller: true,
  };

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className='container'>
        <div className='logo'>
          {/* <Link to='/'></Link> */}
          <span className='text'>fiverr</span>
          <span className='dot'>.</span>
        </div>
        <div className='links'>
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className='user' onClick={() => setOpen(!open)}>
              <img
                src='https://images.pexels.com/photos/982300/pexels-photo-982300.jpeg?auto=compress&cs=tinysrgb&w=1600'
                alt=''
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className='options'>
                  {currentUser?.isSeller && (
                    <>
                      <span>Gigs</span>
                      <span>Add New Gig</span>
                    </>
                  )}
                  <span>Orders</span>
                  <span>Messages</span>
                  <span>Logout</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className='menu'>
            <span>Test</span>
            <span>Test</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
