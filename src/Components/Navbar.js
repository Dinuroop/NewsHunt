import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import img from "../Assests/globe.png"
import {Link} from "react-router-dom";


var query;
const Navbar=()=> {
    return (
      <div className='flexd-flex align-items-stretch'>
        <nav className="navbar navbar-dark bg-dark fixed" >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <div style={{fontFamily:"cursive"}}>
                        <img src={img} height="65px" alt="..."/>
                    <strong>HUNT</strong>
                    </div>
                </Link>
                <div>
                {/* <form class="d-flex w-md-100 p-3" style={{border:"25px"}}>
                    <input style={{borderRadius:"15px"}} class="form-control-m w-md-100" value={query} onChange={fetchQuery} type="search" placeholder="Search" aria-label="Search"/>
                    <button style={{borderRadius:"15px"}} class="btn btn-sm w-20 p-0 buttton1" type="submit">Search</button>
                </form> */}
                </div>
                {/* <button onClick={() => app.auth().signOut()}>Sign out</button> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div style={{width:"315px"}} className="offcanvas offcanvas-end text-bg-dark" tabIndex="0" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">News Hunt</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark">
                        <li><Link className="dropdown-item" to="/business">Business</Link></li>
                        <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                        <li><Link className="dropdown-item" to="/health">Health</Link></li>
                        <li><Link className="dropdown-item" to="/science">Science</Link></li>
                        <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                        <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li><Link className="dropdown-item" to="/general">General</Link></li>
                        </ul>
                    </li>
                    </ul>
                    {/* <form className="d-flex mt-3" role="search">
                    <input className="form-control me-2" type="search" placeholder="Article Name" aria-label="Search"/>
                    <button className="btn btn-success" type="submit">Search</button>
                    </form> */}
                </div>
                </div>
            </div>
            </nav>
      </div>
    )
  }

export default Navbar;
export {query};