/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Link} from 'react-router-dom'
import CustomerHome from '../CustomerHome/CustomerHome';
import EmployeeeHome from '../EmployeeHome/EmployeeHome';
import NotLoggedIn from '../Notloogedin/NotloggedIn';


import './Homepage.css';

const Homepage=(props)=>{

    //*Rendering Navbar from here.
    //*Navbar can be Edited from here.

    const {
            user,
            handleLogout,
            name,
            isCustomer,
            isEmployee,
            email
        } = props;


    return (
            <>
                    {user?(
                        <>  
                            <section className="hero">
                            <nav class="navbar navbar-light navbar-expand-md pulse animated navb navigation-clean-button">
                                    <div class="container"><a class="navbar-brand" href="#">Helpers</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                                        <div class="collapse navbar-collapse" id="navcol-1">
                                            <ul class="navbar-nav mr-auto">
                                                <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
                                                <li class="nav-item"><a class="nav-link" href="#">Contribute</a></li>
                                                <li class="nav-item dropdown"><a class="dropdown-toggle nav-link" aria-expanded="false" data-toggle="dropdown" href="#">Types</a>
                                                    <div class="dropdown-menu"><a class="dropdown-item" href="#">Medical Aid</a><a class="dropdown-item" href="#">Home Aid</a></div>
                                                </li>
                                            </ul><Link class="btn btn-light action-button" to="/" onClick={handleLogout} style={{textDecoration:"none",color:"blue"}}>Logout</Link><span class="navbar-text actions"> </span>
                                        </div>
                                    </div>
                            </nav>
                                <div>
                                    {isCustomer?(
                                            <>
                                                <CustomerHome {...props} name={name} email={email} />
                                            </>
                                        ):(
                                            <>
                                                
                                            </>
                                        )}
                                    {isEmployee?(
                                            <>
                                                <EmployeeeHome {...props} name={name} email={email}/>
                                            </>
                                    ):(
                                            <>
                                            </>
                                    )}
                                </div>
                            </section>
                        </>
                    ):(
                        <>
                            {/* <section className="hero">
                                <nav>
                                    <h2>Welcome</h2>
                                    <h2>HomePage</h2>
                                    <Link to="/login"><button>Login</button></Link>
                                </nav>
                                
                            </section> */}
                            <div>
                                    <NotLoggedIn/>
                            </div>
                        </>
                    )}
            </>
    )
}


export default Homepage;