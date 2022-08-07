import React from "react";

function Footer() {
  return (
    <div>
      <div className="mt-5 pt-5 pb-5 footer bg-danger text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xs-12 about-company">
              <h2>About Us</h2>
              <p className="pr-5 text-white-50">
                Bringing Ruby knowledge right to you so you don't struggle like
                we did.{" "}
              </p>
            </div>
            <div className="col-lg-3 col-xs-12 links">
              <h4 className="mt-lg-0 mt-sm-3 ">Links</h4>
              <ul className="m-0 p-0 footer-links">
                <li className="">
                  -{" "}
                  <a  href="https://www.tutorialspoint.com/ruby/index.htm">
                    Tutorials Point
                  </a>
                </li>
                <li>
                  -{" "}
                  <a href="https://www.ruby-lang.org/en/documentation/quickstart/">
                    Ruby In 20 Minutes
                  </a>
                </li>
                <li>
                  -{" "}
                  <a href="https://launchschool.com/books/ruby">
                    Launch School
                  </a>
                </li>

                <li>
                  -{" "}
                  <a href="https://www.rubyguides.com/ruby-tutorial/">
                    Ruby Guides
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-xs-12 location">
              <h4 className="mt-lg-0 mt-sm-4">Nairobi</h4>
              <p>22, Lorem, Ruby Lane</p>
              <p className="mb-0">
                <i className="fa fa-phone mr-3"></i>(+254) 754-3010
              </p>
              <p>
                <i className="fa fa-envelope-o mr-3"></i>nairuby@ruby.com
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col copyright">
              <p className="">
                <small className="text-white-50">© 2022 All Rights Reserved.</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;