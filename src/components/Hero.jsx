function Hero() {
  return (
    <>
      <section className="container-fluid" id="home-page">
        <div className="row  justify-content-center align-center">
          <div className="col-md-7 col-sm-12">
            <div className="mt-5">
              <br />
              <br />
              <br />
              <h1 className="h1 fw-bolder text-light text-center">
                Welcome to <span>FBX</span>{" "}
              </h1>
              <p className=" lead text-light text-center mb-5">
                Find talented freelancers for your projects.
              </p>

              <form className="text-center mt-5" action="">
                <div className="container mt-5">
                  <div className="row mt-5">
                    <div className="col-md-10 mt-5">
                      <input
                        id="gsearch"
                        type="text"
                        className="form-control d-inline"
                        placeholder="what are u looking for"
                      />
                    </div>
                    <div className="col-md-1 mt-5">
                      <label htmlFor="gsearch">
                        <button className="d-inline ms-0 bg-dark" id="lab-btn">
                          <i className="fa fa-search text-light"></i>{" "}
                        </button>
                      </label>
                    </div>
                  </div>
                </div>
              </form>
              <div className="mt-3 mx-0 text-center">
                <span className="text-light fw-bold">popular:</span>
                <button className="btn btn-light btn-outline-info rounded-pill p-1">
                  web design
                </button>
                <button className="btn btn-light btn-outline-info rounded-pill p-1">
                  logo design
                </button>
                <button className="btn btn-light btn-outline-info rounded-pill p-1">
                  AI services
                </button>
                <button className="btn btn-light btn-outline-info rounded-pill p-1">
                  word press
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
    </>
  );
}

export default Hero;
