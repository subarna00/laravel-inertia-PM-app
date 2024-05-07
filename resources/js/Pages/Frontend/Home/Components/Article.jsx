export default function Article() {
    return (
        <>
            <section className="space-ptb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-9">
                            <div className="section-title text-center">
                                <h2>Latest news and inspirational stories</h2>
                                <p>
                                    Check out our latest blog posts, articles,
                                    client success stories and essential
                                    announcement.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7 col-lg-8 mb-4">
                            <div className="blog-post blog-post-sticky">
                                <div className="blog-post-image">
                                    <img
                                        className="img-fluid"
                                        src="images/blog/01.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="blog-post-content">
                                    <div className="blog-post-info">
                                        <div className="blog-post-author">
                                            <a
                                                href="#"
                                                className="btn btn-light-round btn-round text-primary"
                                            >
                                                Marketing
                                            </a>
                                        </div>
                                        <div className="blog-post-date">
                                            <a href="#">Feb 4, 2020</a>
                                        </div>
                                    </div>
                                    <div className="blog-post-details">
                                        <h5 className="blog-post-title">
                                            <a href="blog-detail.html">
                                                From a small startup to a
                                                leading global agency in 10
                                                Years
                                            </a>
                                        </h5>
                                        <p className="mb-0">
                                            We also know those epic stories,
                                            those modern-day legends surrounding
                                            the early failures of such supremely
                                            successful folks as Michael Jordan
                                            and Bill Gates.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-4">
                            <div className="blog-post mb-4">
                                <div className="blog-post-image">
                                    <img
                                        className="img-fluid"
                                        src="images/blog/02.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="blog-post-content">
                                    <div className="blog-post-info">
                                        <div className="blog-post-author">
                                            <a
                                                href="#"
                                                className="btn btn-light-round btn-round text-primary"
                                            >
                                                Finance
                                            </a>
                                        </div>
                                        <div className="blog-post-date">
                                            <a href="#">Feb 15, 2020</a>
                                        </div>
                                    </div>
                                    <div className="blog-post-details">
                                        <h5 className="blog-post-title">
                                            <a href="blog-detail.html">
                                                How google’s BERT algorithm
                                                affects your website traffic
                                            </a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-post mb-4">
                                <div className="blog-post-image">
                                    <img
                                        className="img-fluid"
                                        src="images/blog/03.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="blog-post-content">
                                    <div className="blog-post-info">
                                        <div className="blog-post-author">
                                            <a
                                                href="#"
                                                className="btn btn-light-round btn-round text-primary"
                                            >
                                                Operations
                                            </a>
                                        </div>
                                        <div className="blog-post-date">
                                            <a href="#">Sep 19, 2020</a>
                                        </div>
                                    </div>
                                    <div className="blog-post-details">
                                        <h5 className="blog-post-title">
                                            <a href="blog-detail.html">
                                                Five reasons why you must create
                                                a website for your company
                                            </a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="m-0 mt-4" />
                    <div className="row mt-4 mt-md-5">
                        <div className="col-12 d-md-flex justify-content-center align-items-center text-center">
                            <p className="mb-3 mb-md-0 mx-0 mx-md-3 text-light">
                                We have articles on a range of topics
                            </p>
                            <a
                                href="#"
                                className="btn btn-primary-round btn-round mx-0 mx-md-3"
                            >
                                View all Blogs
                                <i className="fas fa-arrow-right ps-3"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
