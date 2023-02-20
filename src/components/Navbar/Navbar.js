import React, {useState} from 'react'
import {Link }from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  const [click, setClick]=useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <>
     <nav className='navbar'>
        <div className='container flex_space'>
            <div className='menu-icon' onClick={handleClick}>
            <i className= {click? 'fas fa-times':'fas fa-bars'}></i>
            </div>
            <ul className={click? 'nav-menu active': 'nav-menu'}>
                
                <li><Link to ='/' onClick={closeMobileMenu}>Home</Link></li>
                <li><Link to ='/about' onClick={closeMobileMenu}>About Us</Link></li>
                <li><Link to ='/gallery' onClick={closeMobileMenu}>Gallery</Link></li>
                <li><Link to ='/destination' Click={closeMobileMenu}>Destination</Link></li>
                <li><Link to ='/blog' onClick={closeMobileMenu} >Blogs</Link></li>
                <li><Link to ='/testimonials' onClick={closeMobileMenu} >Testimonials</Link></li>
                <li><Link to ='/contact' onClick={closeMobileMenu}>Contact Us</Link></li>
               
            </ul>
            <div className='login-area flex'>
             <li>
              <Link to='/sign-in'>
                <i className='fa fa-arrow-right'>Sign In</i>
              </Link>
              </li> 
              <li>
              <Link to='/register'>
                <i className='fa fa-arrow-right'>Register</i>
              </Link>
              </li> 

              <li>
              <Link to='/Contact'>
                <button className='primary-btn'>Request a Quote</button>
              </Link>
              </li> 

            </div>
        </div>


    </nav> 
    <header>
      <div className='container flex_space'>
        <div className='logo'>
          Our Hotel
        </div>
        <div className='contact flex_space'>
          <div className='box flex_space'>
            <div className='icons'>
              <i className='far fa-clock'></i>
            </div>
            <div className='text'>
              <h4>Working Hours</h4>
              <Link to ='/contact'>Monday-Sunday:9.00AM to 6.00pm</Link>
            </div>
          </div>

          <div className='box flex_space'>
            <div className='icons'>
              <i className='fas fa-phone-volume'></i>
            </div>
            <div className='text'>
              <h4>Call Us</h4>
              <Link to ='/contact'>+014 123 456</Link>
            </div>
          </div>
          <div className='box flex_space'>
            <div className='icons'>
              <i className='far fa-envelope'></i>
            </div>
            <div className='text'>
              <h4>Email Us</h4>
              <Link to ='/contact'>infoourhotel@gmail.com</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Navbar
