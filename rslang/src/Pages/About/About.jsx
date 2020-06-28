import React from "react";
import "./About.scss";


export class About extends React.Component {    
  render() {
    return (
        <>
          <nav
            className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
            id="mainNav"
          >
            <div className="container">
              <a className="navbar-brand js-scroll-trigger" href="#page-top">
                Start Bootstrap
              </a>
              <button
                className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                Menu
                <i className="fas fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item mx-0 mx-lg-1">
                    <a
                      className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                      href="#portfolio"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item mx-0 mx-lg-1">
                    <a
                      className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                      href="#about"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item mx-0 mx-lg-1">
                    <a
                      className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                      href="#contact"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="container d-flex align-items-center flex-column">
            <img
              className="masthead-avatar mb-5"
              src={require("./assets/img/avataaars.svg")}
              alt=""
            />

            <h1 className="masthead-heading text-uppercase mb-0">
              Start Bootstrap
            </h1>

            <div className="divider-custom divider-light">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="divider-custom-line"></div>
            </div>

            <p className="masthead-subheading font-weight-light mb-0">
              Graphic Artist - Web Designer - Illustrator
            </p>
          </div>

          <section className="page-section portfolio" id="portfolio">
            <div className="container">
              <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
                Portfolio
              </h2>

              <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">
                  <i className="fas fa-star"></i>
                </div>
                <div className="divider-custom-line"></div>
              </div>

              <div className="row">
                <div className="col-md-6 col-lg-4 mb-5">
                  <div
                    className="portfolio-item mx-auto"
                    data-toggle="modal"
                    data-target="#portfolioModal1"
                  >
                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                      <div className="portfolio-item-caption-content text-center text-white">
                        <i className="fas fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img
                      className="img-fluid"
                      src={require("./assets/img/portfolio/cabin.png")}
                      alt=""
                    />
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 mb-5">
                  <div
                    className="portfolio-item mx-auto"
                    data-toggle="modal"
                    data-target="#portfolioModal2"
                  >
                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                      <div className="portfolio-item-caption-content text-center text-white">
                        <i className="fas fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img
                      className="img-fluid"
                      src={require("./assets/img/portfolio/cake.png")}
                      alt=""
                    />
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 mb-5">
                  <div
                    className="portfolio-item mx-auto"
                    data-toggle="modal"
                    data-target="#portfolioModal3"
                  >
                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                      <div className="portfolio-item-caption-content text-center text-white">
                        <i className="fas fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img
                      className="img-fluid"
                      src={require("./assets/img/portfolio/circus.png")}
                      alt=""
                    />
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                  <div
                    className="portfolio-item mx-auto"
                    data-toggle="modal"
                    data-target="#portfolioModal4"
                  >
                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                      <div className="portfolio-item-caption-content text-center text-white">
                        <i className="fas fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img
                      className="img-fluid"
                      src={require("./assets/img/portfolio/game.png")}
                      alt=""
                    />
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                  <div
                    className="portfolio-item mx-auto"
                    data-toggle="modal"
                    data-target="#portfolioModal5"
                  >
                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                      <div className="portfolio-item-caption-content text-center text-white">
                        <i className="fas fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img
                      className="img-fluid"
                      src={require("./assets/img/portfolio/safe.png")}
                      alt=""
                    />
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div
                    className="portfolio-item mx-auto"
                    data-toggle="modal"
                    data-target="#portfolioModal6"
                  >
                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                      <div className="portfolio-item-caption-content text-center text-white">
                        <i className="fas fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img
                      className="img-fluid"
                      src={require("./assets/img/portfolio/submarine.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="page-section bg-primary text-white mb-0"
            id="about"
          >
            <div className="container">
              <h2 className="page-section-heading text-center text-uppercase text-white">
                About
              </h2>

              <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">
                  <i className="fas fa-star"></i>
                </div>
                <div className="divider-custom-line"></div>
              </div>

              <div className="row">
                <div className="col-lg-4 ml-auto">
                  <p className="lead">
                    Freelancer is a free bootstrap theme created by Start
                    Bootstrap. The download includes the complete source files
                    including HTML, CSS, and JavaScript as well as optional SASS
                    stylesheets for easy customization.
                  </p>
                </div>
                <div className="col-lg-4 mr-auto">
                  <p className="lead">
                    You can create your own custom avatar for the masthead,
                    change the icon in the dividers, and add your email address
                    to the contact form to make it fully functional!
                  </p>
                </div>
              </div>

              <div className="text-center mt-4">
                <a
                  className="btn btn-xl btn-outline-light"
                  href="https://startbootstrap.com/themes/freelancer/"
                >
                  <i className="fas fa-download mr-2"></i>
                  Free Download!
                </a>
              </div>
            </div>
          </section>

          <div className="container">
            <div className="row">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Location</h4>
                <p className="lead mb-0">
                  2215 John Daniel Drive
                  <br />
                  Clark, MO 65243
                </p>
              </div>

              <div className="col-lg-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Around the Web</h4>
                <a className="btn btn-outline-light btn-social mx-1" href="#!">
                  <i className="fab fa-fw fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social mx-1" href="#!">
                  <i className="fab fa-fw fa-twitter"></i>
                </a>
                <a className="btn btn-outline-light btn-social mx-1" href="#!">
                  <i className="fab fa-fw fa-linkedin-in"></i>
                </a>
                <a className="btn btn-outline-light btn-social mx-1" href="#!">
                  <i className="fab fa-fw fa-dribbble"></i>
                </a>
              </div>

              <div className="col-lg-4">
                <h4 className="text-uppercase mb-4">About Freelancer</h4>
                <p className="lead mb-0">
                  Freelance is a free to use, MIT licensed Bootstrap theme
                  created by
                  <a href="http://startbootstrap.com">Start Bootstrap</a>.
                </p>
              </div>
            </div>
          </div>

          <div className="copyright py-4 text-center text-white">
            <div className="container">
              <small>Copyright © Your Website 2020</small>
            </div>
          </div>

          <div className="scroll-to-top d-lg-none position-fixed">
            <a
              className="js-scroll-trigger d-block text-center text-white rounded"
              href="#page-top"
            >
              <i className="fa fa-chevron-up"></i>
            </a>
          </div>

          <div
            className="portfolio-modal modal fade"
            id="portfolioModal1"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="portfolioModal1Label"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl" role="document">
              <div className="modal-content">
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i className="fas fa-times"></i>
                  </span>
                </button>
                <div className="modal-body text-center">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        <h2
                          className="portfolio-modal-title text-secondary text-uppercase mb-0"
                          id="portfolioModal1Label"
                        >
                          Log Cabin
                        </h2>

                        <div className="divider-custom">
                          <div className="divider-custom-line"></div>
                          <div className="divider-custom-icon">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="divider-custom-line"></div>
                        </div>

                        <img
                          className="img-fluid rounded mb-5"
                          src={require("./assets/img/portfolio/cabin.png")}
                          alt=""
                        />

                        <p className="mb-5">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Mollitia neque assumenda ipsam nihil, molestias
                          magnam, recusandae quos quis inventore quisquam velit
                          asperiores, vitae? Reprehenderit soluta, eos quod
                          consequuntur itaque. Nam.
                        </p>
                        <button
                          className="btn btn-primary"
                          data-dismiss="modal"
                        >
                          <i className="fas fa-times fa-fw"></i>
                          Close Window
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="portfolio-modal modal fade"
            id="portfolioModal2"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="portfolioModal2Label"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl" role="document">
              <div className="modal-content">
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i className="fas fa-times"></i>
                  </span>
                </button>
                <div className="modal-body text-center">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        <h2
                          className="portfolio-modal-title text-secondary text-uppercase mb-0"
                          id="portfolioModal2Label"
                        >
                          Tasty Cake
                        </h2>

                        <div className="divider-custom">
                          <div className="divider-custom-line"></div>
                          <div className="divider-custom-icon">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="divider-custom-line"></div>
                        </div>

                        <img
                          className="img-fluid rounded mb-5"
                          src={require("./assets/img/portfolio/cake.png")}
                          alt=""
                        />

                        <p className="mb-5">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Mollitia neque assumenda ipsam nihil, molestias
                          magnam, recusandae quos quis inventore quisquam velit
                          asperiores, vitae? Reprehenderit soluta, eos quod
                          consequuntur itaque. Nam.
                        </p>
                        <button
                          className="btn btn-primary"
                          data-dismiss="modal"
                        >
                          <i className="fas fa-times fa-fw"></i>
                          Close Window
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="portfolio-modal modal fade"
            id="portfolioModal3"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="portfolioModal3Label"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl" role="document">
              <div className="modal-content">
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i className="fas fa-times"></i>
                  </span>
                </button>
                <div className="modal-body text-center">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        <h2
                          className="portfolio-modal-title text-secondary text-uppercase mb-0"
                          id="portfolioModal3Label"
                        >
                          Circus Tent
                        </h2>

                        <div className="divider-custom">
                          <div className="divider-custom-line"></div>
                          <div className="divider-custom-icon">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="divider-custom-line"></div>
                        </div>

                        <img
                          className="img-fluid rounded mb-5"
                          src={require("./assets/img/portfolio/circus.png")}
                          alt=""
                        />

                        <p className="mb-5">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Mollitia neque assumenda ipsam nihil, molestias
                          magnam, recusandae quos quis inventore quisquam velit
                          asperiores, vitae? Reprehenderit soluta, eos quod
                          consequuntur itaque. Nam.
                        </p>
                        <button
                          className="btn btn-primary"
                          data-dismiss="modal"
                        >
                          <i className="fas fa-times fa-fw"></i>
                          Close Window
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="portfolio-modal modal fade"
            id="portfolioModal4"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="portfolioModal4Label"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl" role="document">
              <div className="modal-content">
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i className="fas fa-times"></i>
                  </span>
                </button>
                <div className="modal-body text-center">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        <h2
                          className="portfolio-modal-title text-secondary text-uppercase mb-0"
                          id="portfolioModal4Label"
                        >
                          Controller
                        </h2>

                        <div className="divider-custom">
                          <div className="divider-custom-line"></div>
                          <div className="divider-custom-icon">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="divider-custom-line"></div>
                        </div>

                        <img
                          className="img-fluid rounded mb-5"
                          src={require("./assets/img/portfolio/game.png")}
                          alt=""
                        />

                        <p className="mb-5">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Mollitia neque assumenda ipsam nihil, molestias
                          magnam, recusandae quos quis inventore quisquam velit
                          asperiores, vitae? Reprehenderit soluta, eos quod
                          consequuntur itaque. Nam.
                        </p>
                        <button
                          className="btn btn-primary"
                          data-dismiss="modal"
                        >
                          <i className="fas fa-times fa-fw"></i>
                          Close Window
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="portfolio-modal modal fade"
            id="portfolioModal5"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="portfolioModal5Label"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl" role="document">
              <div className="modal-content">
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i className="fas fa-times"></i>
                  </span>
                </button>
                <div className="modal-body text-center">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        <h2
                          className="portfolio-modal-title text-secondary text-uppercase mb-0"
                          id="portfolioModal5Label"
                        >
                          Locked Safe
                        </h2>

                        <div className="divider-custom">
                          <div className="divider-custom-line"></div>
                          <div className="divider-custom-icon">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="divider-custom-line"></div>
                        </div>

                        <img
                          className="img-fluid rounded mb-5"
                          src={require("./assets/img/portfolio/safe.png")}
                          alt=""
                        />

                        <p className="mb-5">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Mollitia neque assumenda ipsam nihil, molestias
                          magnam, recusandae quos quis inventore quisquam velit
                          asperiores, vitae? Reprehenderit soluta, eos quod
                          consequuntur itaque. Nam.
                        </p>
                        <button
                          className="btn btn-primary"
                          data-dismiss="modal"
                        >
                          <i className="fas fa-times fa-fw"></i>
                          Close Window
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="portfolio-modal modal fade"
            id="portfolioModal6"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="portfolioModal6Label"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl" role="document">
              <div className="modal-content">
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i className="fas fa-times"></i>
                  </span>
                </button>
                <div className="modal-body text-center">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        <h2
                          className="portfolio-modal-title text-secondary text-uppercase mb-0"
                          id="portfolioModal6Label"
                        >
                          Submarine
                        </h2>

                        <div className="divider-custom">
                          <div className="divider-custom-line"></div>
                          <div className="divider-custom-icon">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="divider-custom-line"></div>
                        </div>

                        <img
                          className="img-fluid rounded mb-5"
                          src={require("./assets/img/portfolio/submarine.png")}
                          alt=""
                        />

                        <p className="mb-5">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Mollitia neque assumenda ipsam nihil, molestias
                          magnam, recusandae quos quis inventore quisquam velit
                          asperiores, vitae? Reprehenderit soluta, eos quod
                          consequuntur itaque. Nam.
                        </p>
                        <button
                          className="btn btn-primary"
                          data-dismiss="modal"
                        >
                          <i className="fas fa-times fa-fw"></i>
                          Close Window
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>

          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>

          <script src="assets/mail/jqBootstrapValidation.js"></script>
          <script src="assets/mail/contact_me.js"></script>

          <script src="js/scripts.js"></script>
</>
    );
  }
}
