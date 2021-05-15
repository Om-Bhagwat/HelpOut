/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Link} from 'react-router-dom';
import './CustomerHome.css';
const CustomerHome=()=> {
    return (
        <div>
                <div className="simple-slider">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide"></div>
                        </div>
                        <div className="swiper-pagination"></div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                </div>
                <div className="container">
                    <div className="row" style={{margin:"10px",scrollbarWidth:"thin"}}>
                        <div className="col-md-8">
                            <section className="highlight-clean">
                                <div className="container">
                                    <div className="intro">
                                        <h2 className="text-center">Highlight</h2>
                                        <p className="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. </p>
                                    </div>
                                    <div className="buttons"><Link className="btn btn-primary" to="/medDetails">Donate</Link></div>
                                </div>
                            </section>
                        </div>
                        <div className="col-md-4 prev" style={{height: "312px"}}>
                            <div className="text-center" style={{background: "linear-gradient(#93fcfc 97%, white 100%)",boxShadow: "1px 2px 4px"}}>
                                <p>Hash ID:</p>
                                <div>
                                    <p>Paragraph</p>
                                </div>
                            </div>
                            <div className="text-center" style={{background: "linear-gradient(#93fcfc 97%, white 100%)",boxShadow: "1px 2px 4px"}}>
                                <p>Hash ID:</p>
                                <div>
                                    <p>Paragraph</p>
                                </div>
                            </div>
                            <div className="text-center" style={{background: "linear-gradient(#93fcfc 97%, white 100%)",boxShadow: "1px 2px 4px"}}>
                                <p>Hash ID:</p>
                                <div>
                                    <p>Paragraph</p>
                                </div>
                            </div>
                            <div className="text-center" style={{background: "linear-gradient(#93fcfc 97%, white 100%)",boxShadow: "1px 2px 4px"}}>
                                <p>Hash ID:</p>
                                <div>
                                    <p>Paragraph</p>
                                </div>
                            </div>
                            <div className="text-center" style={{background: "linear-gradient(#93fcfc 97%, white 100%)",boxShadow: "1px 2px 4px"}}>
                                <p>Hash ID:</p>
                                <div>
                                    <p>Paragraph</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="register-photo">
                    <div className="form-container">
                        <div className="image-holder"></div>
                            <form data-bss-subject="Contacted by">
                                <h2 className="text-center"><strong>Contact us</strong></h2>
                                    <div className="form-group">
                                        <input className="form-control" type="email" name="email" placeholder="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <input class="form-control" type="text" placeholder="Comment"/>
                                    </div>                                           
                                    <div className="form-group">
                                        <button className="btn btn-primary btn-block" type="submit">Contact</button>
                                    </div>
                            </form>
                        </div>
                </section>
                <footer className="footer-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-3 item">
                                <h3>Services</h3>
                                <ul>
                                    <li><a href="#">Web design</a></li>
                                    <li><a href="#">Development</a></li>
                                    <li><a href="#">Hosting</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 item">
                                <h3>About</h3>
                                <ul>
                                    <li><a href="#">Company</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 item text">
                                <h3>Company Name</h3>
                                <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                            </div>
                            <div className="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a></div>
                        </div>
                        <p className="copyright">Company Name © 2021</p>
                    </div>
                </footer>
            </div>
    )
}

export default CustomerHome;