import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

export const Header = () => {
  const token = localStorage.getItem("userToken")
  
  useEffect(()=>{

  },[token])

  return (
  <>
 
      <div className='row' style={{height:"50px"}}>
       <div className='col'>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Yuvasoft</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto">
        {/* <Link to='/'> Login</Link> */}

      {token == "undefined" ?
      <div>
      <li className="nav-item  ">
      <Link to='/'  className="Navhome nav-link"> Login</Link>
      </li>
      <li className="nav-item">
      <Link to='/signup'  className="Navhome nav-link"> Sign Up</Link>
      </li>
      </div>
      :
      // <li className="nav-item dropdown">
      // <Link to='/dashboard'  className="Navhome nav-link"> Dashboard</Link>
      // </li>
      null
    }
    </ul>
  </div>
</nav>
    </div>
   </div>
  </>
  
  )
}
