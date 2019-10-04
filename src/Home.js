import React from "react";
import { withRouter, Link } from "react-router-dom";

import AdvertiserList from "./AdvertiserList";

const Button = withRouter(({ history }) => (
  <button
    type="button"
    className="btn btn-primary"
    id="continue-button"
    onClick={() => {
      history.push("/form");
    }}
  >
    CONTINUE
  </button>
));

let setOfKeys = new Set([]);

const advertisers = [
  {
    id: 1,
    name: "Goondiwindi Regional Council",
    image: "logo.png"
  },
  {
    id: 2,
    name: "7 News Toowoomba",
    image: "7news.png"
  },
  {
    id: 3,
    name: "Goondiwindi Argus",
    image: "goondiwindi_argus.png"
  },
  {
    id: 4,
    name: "Goondiwindi Care",
    image: "goondiwindi_care.jpg"
  },
  {
    id: 5,
    name: "Macintyre Gazette",
    image: "macintyre.png"
  },
  {
    id: 6,
    name: "QLD Country Life",
    image: "qld_country_life.png"
  },
  {
    id: 7,
    name: "WinNews Toowoomba",
    image: "winnews.jpg"
  },
  {
    id: 8,
    name: "Southern Free Times",
    image: "southern.png"
  },
  {
    id: 9,
    name: "Chronicle",
    image: "chronicle.jpg"
  },
  {
    id: 10,
    name: "Rebel FM",
    image: "rebelfm.jpg"
  }
];

export default function Home() {
  return (
    <div>
      <header>
        <div id="page-name">
          <img id="logo-white" src="logo_white.png" alt="white logo" />
          &nbsp; ONE STOP EVENT REGISTRATION
        </div>
      </header>
      <div class="container">
        <div id="advertising-avenues-list">
          <div id="label">
            Please select the advertising avenues from below:
          </div>
          <AdvertiserList advertisers={advertisers} setOfKeys={setOfKeys} />
          <div id="button-div">
            <Button />
          </div>
        </div>
      </div>
      <footer className="page-footer">
        <div className="footer-copyright text-center py-3">
          © 2019 Goondiwindi Regional Council
        </div>
      </footer>
    </div>
  );
}
