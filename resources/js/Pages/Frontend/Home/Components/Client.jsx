export default function ClientSection() {
    return (
        <>
            <section className="mt-n5 z-index-9 position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="our-clients our-clients-style-02 bg-dark">
                                <div className="client-title ps-4">
                                    <h5 className="text-white">Our Clients</h5>
                                    <div className="svg-item"></div>
                                </div>
                                <div className="brand-logo ps-4">
                                    <div
                                        className="owl-carousel testimonial-center owl-nav-bottom-center"
                                        data-nav-arrow="false"
                                        data-items="5"
                                        data-md-items="4"
                                        data-sm-items="4"
                                        data-xs-items="3"
                                        data-xx-items="2"
                                        data-space="40"
                                        data-autoheight="true"
                                    >
                                        <div className="item">
                                            <img
                                                className="img-fluid center-block mx-auto"
                                                src="images/client-logo/light/01.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="item">
                                            <img
                                                className="img-fluid center-block mx-auto"
                                                src="images/client-logo/light/02.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="item">
                                            <img
                                                className="img-fluid center-block mx-auto"
                                                src="images/client-logo/light/03.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="item">
                                            <img
                                                className="img-fluid center-block mx-auto"
                                                src="images/client-logo/light/04.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="item">
                                            <img
                                                className="img-fluid center-block mx-auto"
                                                src="images/client-logo/light/05.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="item">
                                            <img
                                                className="img-fluid center-block mx-auto"
                                                src="images/client-logo/light/06.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="item">
                                            <img
                                                className="img-fluid center-block mx-auto"
                                                src="images/client-logo/light/07.svg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="client-btn">
                                    <a
                                        href="#"
                                        className="btn btn-primary-round btn-round text-white"
                                    >
                                        Case Studies
                                        <i className="fas fa-arrow-right ps-3"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
