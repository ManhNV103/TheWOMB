import React from "react";
import { withRouter } from "react-router-dom";

const Button = withRouter(({ history }) => (
  <button
    type="button"
    class="btn btn-primary"
    id="continue-button"
    onClick={() => {
      history.push("/form");
    }}
  >
    CONTINUE
  </button>
));

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div id="page-name">
            <img id="logo-white" src="logo_white.png" alt="white logo" />
            &nbsp; ONE STOP EVENT REGISTRATION
          </div>
        </header>
        <div>
          <div id="advertising-avenues-list">
            <div id="label">
              Please select the advertising avenues from below:
            </div>
            <div class="grid-container">
              <div class="cell">
                <img class="ad-img" src="logo.png" alt="goondiwindi logo" />
              </div>
              <div class="cell">
                <img class="ad-img" src="7news.png" alt="7 news Toowoomba" />
              </div>
              <div class="cell">
                <img
                  class="ad-img"
                  src="goondiwindi_care.jpg"
                  alt="goondiwindi care"
                />
              </div>
              <div class="cell">
                <img
                  class="ad-img"
                  src="macintyre.png"
                  alt="MacIntyre Gazette"
                />
              </div>
              <div class="cell">
                <img
                  class="ad-img"
                  src="qld_country_life.png"
                  alt="QLD Country Life"
                />
              </div>
              <div class="cell">
                <img class="ad-img" src="winnews.jpg" alt="winnews toowoomba" />
              </div>
              <div class="cell">
                <img
                  class="ad-img"
                  src="southern.png"
                  alt="southern free times"
                />
              </div>
              <div class="cell">
                <img
                  class="ad-img"
                  src="chronicle.jpg"
                  alt="The Chronicle Toowoomba"
                />
              </div>
              <div class="cell">
                <img class="ad-img" src="rebelfm.jpg" alt="Rebel FM" />
              </div>
              <div class="cell">
                <img
                  class="ad-img"
                  src="thebreeze.jpg"
                  alt="The Chronicle Toowoomba"
                />
              </div>
              <div class="cell">
                <img
                  class="ad-img"
                  src="goondiwindi_argus.png"
                  alt="goondiwindi argus"
                />
              </div>
              <div class="cell">
                <img
                  class="ad-img"
                  src="tenfm.png"
                  alt="The Chronicle Toowoomba"
                />
              </div>
              <div class="cell">
                <img
                  class="ad-img"
                  src="4sb.jpeg"
                  alt="The Chronicle Toowoomba"
                />
              </div>
              <div class="cell">
                <img
                  class="ad-img"
                  src="goondiwindi_region.png"
                  alt="goondiwindi region"
                />
              </div>
            </div>
            <div id="button-div">
              <Button />
            </div>
          </div>
          <footer class="page-footer">
            <div class="footer-copyright text-center py-3">
              © 2019 Goondiwindi Regional Council
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
