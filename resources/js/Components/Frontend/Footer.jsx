import BackToTop from "./BackToTop";

export default function Footer() {
    return (
        <>
            <BackToTop />
            <footer className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-3">
                                <a href="index-2.html">
                                    <img
                                        className="img-fluid"
                                        src="images/logo.svg"
                                        alt="logo"
                                    />
                                </a>
                            </div>
                            <div className="col-sm-9 text-sm-end mt-4 mt-sm-0">
                                <ul className="list-unstyled mb-0 social-icon">
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-dribbble"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-behance"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr className="my-4 my-sm-5 pb-0" />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
                            <h5 className="text-primary mb-2 mb-sm-4">
                                IT Services
                            </h5>
                            <div className="footer-link">
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#">Data Synchronization</a>
                                    </li>
                                    <li>
                                        <a href="#">Content Management</a>
                                    </li>
                                    <li>
                                        <a href="#">Content Delivery</a>
                                    </li>
                                    <li>
                                        <a href="#">Transaction Processing</a>
                                    </li>
                                    <li>
                                        <a href="#">Process Automation</a>
                                    </li>
                                </ul>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#">Event Processing</a>
                                    </li>
                                    <li>
                                        <a href="#">Information Security</a>
                                    </li>
                                    <li>
                                        <a href="#">Mobile Platforms</a>
                                    </li>
                                    <li>
                                        <a href="#">Communications</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-2 mb-4 mb-lg-0">
                            <h5 className="text-primary mb-2 mb-sm-4">
                                Company
                            </h5>
                            <div className="footer-link">
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#">About</a>
                                    </li>
                                    <li>
                                        <a href="#">Leadership Team</a>
                                    </li>
                                    <li>
                                        <a href="#">IT Blog</a>
                                    </li>
                                    <li>
                                        <a href="#">Case Studies</a>
                                    </li>
                                    <li>
                                        <a href="#">Locations</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Careers{" "}
                                            <span className="badge bg-success ms-2">
                                                We're hiring
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-2 mb-4 mb-sm-0">
                            <h5 className="text-primary mb-2 mb-sm-4">
                                Support
                            </h5>
                            <div className="footer-link">
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#">Forum Support</a>
                                    </li>
                                    <li>
                                        <a href="#">Help & FAQs</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Pricing And Plans</a>
                                    </li>
                                    <li>
                                        <a href="#">Cookies Policy</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="footer-contact-info">
                                <h5 className="text-primary mb-3">
                                    Contact hi-Soft
                                </h5>
                                <div className="contact-address">
                                    <div className="contact-item">
                                        <label>Address:</label>
                                        <p>
                                            6580 Allison Turnpike Creminfort, AL
                                            32808
                                        </p>
                                    </div>
                                    <div className="contact-item">
                                        <label>Phone:</label>
                                        <h4 className="mb-0 fw-bold">
                                            <a href="#">+(704) 279-1249</a>
                                        </h4>
                                    </div>
                                    <div className="contact-item">
                                        <label>Email:</label>
                                        <a className="text-dark" href="#">
                                            letstalk@hisoft.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom py-sm-5 py-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <p className="mb-0">
                                    ©Copyright 2020{" "}
                                    <a href="index-2.html">hi-soft</a> All
                                    Rights Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
