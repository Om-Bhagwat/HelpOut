/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Link} from 'react-router-dom';

import HomeIm from './why2.svg';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';

import './NotloggedIn.css';
const NotLoggedIn=()=>{

    
    return (
        <div>
            <nav class="navbar navbar-light navbar-expand-md pulse animated navb navigation-clean-button">
                <div class="container"><a class="navbar-brand" href="#">Helpers</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navcol-1">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Contribute</a></li>
                            <li class="nav-item dropdown"><a class="dropdown-toggle nav-link" aria-expanded="false" data-toggle="dropdown" href="#">Types</a>
                                <div class="dropdown-menu"><a class="dropdown-item" href="#">Medical Aid</a><a class="dropdown-item" href="#">Home Aid</a></div>
                            </li>
                        </ul><Link class="btn btn-light action-button" to="/login" style={{textDecoration:"none",color:"blue"}}>Login</Link><span class="navbar-text actions"> </span>
                    </div>
                </div>
            </nav>
            
            <div class="text-center text-primary">
                <img data-aos="fade-right" data-aos-delay="50" className="homeImg" src={HomeIm}/>
            </div>
            
            <div class="text-center" style={{margin:"10px",padding:"10px"}}>
                <h1 style={{fontSize: "31px",textShadow: "0px 0px"}}>What we do.</h1>
                    <div class="row" style={{margin: "15px"}}>
                        <div class="col">
                            <div class="card" data-bss-hover-animate="pulse" style={{boxShadow: "1px 2px 4px",marginBottom: "10px"}}>
                                <div class="card-body" style={{margin: "27px",height: "325px",padding: "24px"}}>
                                <h4 class="card-title">Title</h4>
                                <h6 class="text-muted card-subtitle mb-2">Subtitle</h6>
                                <p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                                    <a class="card-link" href="#">Link</a>
                                    <a class="card-link" href="#">Link</a>
                            </div>
                        </div>
                    </div>
                        <div class="col">
                            <div class="card" data-bss-hover-animate="pulse" style={{boxShadow: "1px 2px 4px",marginBottom: "10px"}}>
                                <div class="card-body" style={{margin: "27px",height: "325px",padding: "24px"}}>
                                    <h4 class="card-title">Title</h4>
                                    <h6 class="text-muted card-subtitle mb-2">Subtitle</h6>
                                    <p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><a class="card-link" href="#">Link</a><a class="card-link" href="#">Link</a>
                                </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" data-bss-hover-animate="pulse" style={{boxShadow: "1px 2px 4px",marginBottom: "10px"}}>
                        <div class="card-body" style={{margin: "27px",height: "325px",padding: "24px"}} >
                            <h4 class="card-title">Title</h4>
                            <h6 class="text-muted card-subtitle mb-2">Subtitle</h6>
                            <p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><a class="card-link" href="#">Link</a><a class="card-link" href="#">Link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="testimonials-clean">
        <div class="container">
            <div class="intro">
                <h2 class="text-center">Testimonials </h2>
                <p class="text-center">Our customers love us! Read what they have to say below. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.</p>
            </div>
            <div class="row people">
                <div class="col-md-6 col-lg-4 item">
                    <div class="box">
                        <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
                    </div>
                    <div class="author"><img class="rounded-circle" src={img1}/>
                        <h5 class="name">Ben Johnson</h5>
                        <p class="title">CEO of Company Inc.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 item">
                    <div class="box">
                        <p class="description">Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id.</p>
                    </div>
                    <div class="author"><img class="rounded-circle" src={img2}/>
                        <h5 class="name">Carl Kent</h5>
                        <p class="title">Founder of Style Co.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 item">
                    <div class="box">
                        <p class="description">Aliquam varius finibus est, et interdum justo suscipit. Vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p>
                    </div>
                    <div class="author"><img class="rounded-circle" src={img3}/>
                        <h5 class="name">Emily Clark</h5>
                        <p class="title">Owner of Creative Ltd.</p>
                    </div>
                </div>
            </div>
        </div>
        </section>

        <footer class="footer-dark">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-3 item">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#">Web design</a></li>
                        <li><a href="#">Development</a></li>
                        <li><a href="#">Hosting</a></li>
                    </ul>
                </div>
                <div class="col-sm-6 col-md-3 item">
                    <h3>About</h3>
                    <ul>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                <div class="col-md-6 item text">
                    <h3>Company Name</h3>
                    <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                </div>
                <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
            </div>
            <p class="copyright">Company Name © 2021</p>
        </div>
    </footer>

        </div>
    )
}

export default NotLoggedIn;