function Footer() {
  return (
    <>
      <footer className="bg-dark py-5">
        <div className="container">
          <div className="row text-white g-4">
            <div className="col-md-6 col-lg-3">
              <a
                className="text-uppercase text-decoration-none brand text-white"
                href="index.html"
              >
                Categorys
              </a>
              <ul id="footer-list">
                <li>Graphics and Design</li>
                <li>Digital Marketing</li>Categories
                <li> Writing & Translation</li>
                <li>Video & Animation</li>
                <li> Music & Audio</li>
                <li> Programming & Tech</li>
                <li>Data</li>
                <li> Business</li>
                <li>Lifestyle</li>
                <li>End-to-End Projects</li>
                <li> Sitemap</li>
                <li>Photography</li>
              </ul>
            </div>

            <div className="col-md-6 col-lg-3">
              <p className="fw-bold">about</p>
              <ul className="list-unstyled">
                <li> Careers</li>
                <li> Press & News</li>
                <li>Partnerships</li>
                <li>Investor Relations</li>
                <li> Terms of Service</li>
                <li>Intellectual Property Claims</li>
              </ul>
            </div>

            <div className="col-md-6 col-lg-3">
              <p className="fw-bold">support</p>
              <ul id="footer-list">
                <a href="">
                  <li>support</li>
                </a>
                <li>Help & Support</li>Categories
                <li>Trust & Safety</li>
                <li>Selling on FBX</li>
                <li>Buying on FBX</li>
                <li>FBX Guides</li>
              </ul>
            </div>

            <div className="col-md-6 col-lg-3">
              <div>
                <h5 className="fw-light mb-3">Follow Us</h5>
                <ul className="list-unstyled d-flex">
                  <li>
                    <a
                      href="#"
                      className="text-white text-decoration-none text-muted fs-4 me-4"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-decoration-none text-muted fs-4 me-4"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-decoration-none text-muted fs-4 me-4"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-decoration-none text-muted fs-4 me-4"
                    >
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
