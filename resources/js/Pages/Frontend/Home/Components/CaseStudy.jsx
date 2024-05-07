export default function CaseStudy() {
    return (
        <>
            <section className="space-ptb bg-dark-half-lg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-9 col-lg-10">
                            <div className="section-title text-center position-relative">
                                <h2 className="text-white">
                                    <span className="text-primary">
                                        What's next?
                                    </span>{" "}
                                    our latest client stories
                                </h2>
                                <p className="lead text-white">
                                    We love what we do. Our clients tell us the
                                    same thing.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 order-lg-1 order-1">
                            <div className="case-study">
                                <div
                                    className="case-study-img case-study-lg"
                                    // style="background-image: url('images/project/02.jpg');"
                                ></div>
                                <div className="case-study-info">
                                    <a
                                        className="case-study-title fw-bold"
                                        href="#"
                                    >
                                        Gozzby
                                    </a>
                                    <span className="case-study-services text-primary">
                                        Music
                                    </span>
                                    <p>
                                        If success is a process with a number of
                                        defined steps, then it is just like any
                                        other process.
                                    </p>
                                    <a href="#" className="icon-btn">
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4 order-lg-2 order-3">
                            <div className="row">
                                <div className="col-sm-6 col-lg-12">
                                    <div className="case-study">
                                        <div
                                            className="case-study-img"
                                            // style="background-image: url('images/project/04.jpg');"
                                        ></div>
                                        <div className="case-study-info">
                                            <a
                                                className="case-study-title fw-bold"
                                                href="#"
                                            >
                                                Educatgenix
                                            </a>
                                            <span className="case-study-services text-primary">
                                                Education
                                            </span>
                                            <p>
                                                We all carry a lot of baggage,
                                                thanks to our upbringing...
                                            </p>
                                            <a href="#" className="icon-btn">
                                                <i className="fas fa-long-arrow-alt-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-12">
                                    <div className="case-study">
                                        <div
                                            className="case-study-img"
                                            // style="background-image: url('images/project/06.jpg');"
                                        ></div>
                                        <div className="case-study-info">
                                            <a
                                                className="case-study-title"
                                                href="#"
                                            >
                                                Petfluent
                                            </a>
                                            <span className="case-study-services text-primary">
                                                Pet Care
                                            </span>
                                            <p>
                                                You will drift aimlessly until
                                                you arrive back at the original
                                                dock
                                            </p>
                                            <a href="#" className="icon-btn">
                                                <i className="fas fa-long-arrow-alt-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 order-lg-3 order-2">
                            <div className="case-study">
                                <div
                                    className="case-study-img case-study-lg"
                                    // style="background-image: url('images/project/05.jpg');"
                                ></div>
                                <div className="case-study-info">
                                    <a
                                        className="case-study-title fw-bold"
                                        href="#"
                                    >
                                        Financeoont
                                    </a>
                                    <span className="case-study-services text-primary">
                                        Finance
                                    </span>
                                    <p>
                                        It is truly amazing the damage that we,
                                        as parents, can inflict on our
                                        children...
                                    </p>
                                    <a href="#" className="icon-btn">
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center mt-0 mt-md-4">
                            <a
                                href="#"
                                className="btn btn-primary-round btn-round mx-3"
                            >
                                View all Case Study
                                <i className="fas fa-arrow-right ps-3"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
