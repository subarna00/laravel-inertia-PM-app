export default function Counter() {
    return (
        <>
            <section className="bg-dark py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                            <div className="counter">
                                <div className="counter-icon">
                                    <i className="flaticon-emoji"></i>
                                </div>
                                <div className="counter-content">
                                    <span
                                        className="timer"
                                        data-to="1790"
                                        data-speed="10000"
                                    >
                                        1790
                                    </span>
                                    <label>Happy Clients</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                            <div className="counter">
                                <div className="counter-icon">
                                    <i className="flaticon-trophy"></i>
                                </div>
                                <div className="counter-content align-self-center">
                                    <span
                                        className="timer"
                                        data-to="245"
                                        data-speed="10000"
                                    >
                                        32
                                    </span>
                                    <label>Skilled Experts</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 mb-4 mb-sm-0">
                            <div className="counter">
                                <div className="counter-icon">
                                    <i className="flaticon-strong"></i>
                                </div>
                                <div className="counter-content">
                                    <span
                                        className="timer"
                                        data-to="491"
                                        data-speed="10000"
                                    >
                                        491
                                    </span>
                                    <label>Finished Projects</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="counter">
                                <div className="counter-icon">
                                    <i className="flaticon-icon-149196"></i>
                                </div>
                                <div className="counter-content">
                                    <span
                                        className="timer"
                                        data-to="1090"
                                        data-speed="10000"
                                    >
                                        1090
                                    </span>
                                    <label>Media Posts</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
