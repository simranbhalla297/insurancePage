import React from "react";
import { Row, Col, Container } from "react-bootstrap";
function Footer() {
  return (
    <div className="footer">
      <div class="footer_container">
        <div className="first_line">
          <div className="footer_img">
            <img src={"logo.svg"} />
          </div>
          <div className="footer_icons">
            <div className="icons">
              <img src={"icon-twitter.svg"} />
              <img src={"icon-pinterest.svg"} />
              <img src={"icon-facebook.svg"} />
              <img src={"icon-instagram.svg"} />
            </div>
          </div>
        </div>

        <div className="below-line">
          <Row>
            <Col sm>
              <h2 className="col_heading">Our Company</h2>
              <div className="links">
                <a class="footer-link" href="#">
                  how we work
                </a>
                <a class="footer-link" href="#">
                  why insure?
                </a>
                <a class="footer-link" href="#">
                  view plan
                </a>
                <a class="footer-link" href="#">
                  reviews
                </a>
              </div>
            </Col>
            <Col sm>
              <h2 className="col_heading">Our Company</h2>
              <div className="links">
                <a class="footer-link" href="#">
                  how we work
                </a>
                <a class="footer-link" href="#">
                  why insure?
                </a>
                <a class="footer-link" href="#">
                  view plan
                </a>
                <a class="footer-link" href="#">
                  reviews
                </a>
              </div>
            </Col>
            <Col sm>
              <h2 className="col_heading">Our Company</h2>
              <div className="links">
                <a class="footer-link" href="#">
                  how we work
                </a>
                <a class="footer-link" href="#">
                  why insure?
                </a>
                <a class="footer-link" href="#">
                  view plan
                </a>
                <a class="footer-link" href="#">
                  reviews
                </a>
              </div>
            </Col>
            <Col sm>
              <h2 className="col_heading">Our Company</h2>
              <div className="links">
                <a class="footer-link" href="#">
                  how we work
                </a>
                <a class="footer-link" href="#">
                  why insure?
                </a>
                <a class="footer-link" href="#">
                  view plan
                </a>
                <a class="footer-link" href="#">
                  reviews
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Footer;
