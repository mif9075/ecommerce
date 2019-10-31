import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class index extends Component {
  render() {
    return (
      <div>
        <footer className="footer-distributed">
          <div className="footer-left">
            <h3>
              Pic<span>Hub</span>
            </h3>

            <p className="footer-links">
              <Link to="#">Home</Link>·<Link to="#">Pricing</Link>·
              <Link to="#">About</Link>·<Link to="#">Faq</Link>·
              <Link to="#">Contact</Link>
            </p>

            <p className="footer-company-name">PicHub &copy; 2019</p>
          </div>

          <div className="footer-center">
            <div>
              <i className="fa fa-map-marker"></i>
              <p>
                <span>420 Cloud Street</span> New York, New York
              </p>
            </div>

            <div>
              <i className="fa fa-phone"></i>
              <p>+1 718 123456</p>
            </div>

            <div>
              <i className="fa fa-envelope"></i>
              <p>
                <Link to="/cdn-cgi/l/email-protection#7c0f090c0c130e083c1f13110c1d1205521f1311">
                  <span
                    className="__cf_email__"
                    data-cfemail="b1c2c4c1c1dec3c5f1d2dedcc1d0dfc89fd2dedc"
                  >
                    {/* [email&#160;protected] */}
                    PicHub@mail.com
                  </span>
                </Link>
              </p>
            </div>
          </div>

          <div className="footer-right">
            <p className="footer-company-about">
              <span>About PicHub</span>
              Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
              euismod convallis velit, eu auctor lacus vehicula sit amet.
            </p>

            <div className="footer-icons">
              <Link to="/">
                <i className="fa fa-facebook"></i>
              </Link>
              <Link to="/">
                <i className="fa fa-twitter"></i>
              </Link>
              <Link to="/">
                <i className="fa fa-linkedin"></i>
              </Link>
              <Link to="/">
                <i className="fa fa-github"></i>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
