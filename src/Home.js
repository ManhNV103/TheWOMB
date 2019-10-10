import React from "react";
import { withRouter } from "react-router-dom";

import AdvertiserList from "./AdvertiserList";

let chosenAdvertisers = new Set([]);

// this dictionary is just for reference, not used in the code.
// Arranged in the order that they will appear in the form.
// We are not yet establish this order. Below is just an example

const elements = {
  1: "Event title",
  2: "Start date",
  3: "Duration of event",
  4: "End Date",
  5: "Event start time",
  6: "Event end time",
  7: "Cost",
  8: "Summary",
  9: "Description",
  10: "Contact name",
  11: "Contact phone numer"
};

const advertisers = [
  {
    id: 1,
    name: "Goondiwindi Regional Council",
    image: "logo.png",
    info: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  },
  {
    id: 2,
    name: "7 News Toowoomba",
    image: "7news.png",
    info: [1, 2, 5, 7, 9, 10]
  },
  {
    id: 3,
    name: "Goondiwindi Argus",
    image: "goondiwindi_argus.png",
    info: [1, 2, 3, 7, 8, 11]
  },
  {
    id: 4,
    name: "Goondiwindi Care",
    image: "goondiwindi_care.jpg",
    info: [1, 2, 3, 5, 7, 10]
  },
  {
    id: 5,
    name: "Macintyre Gazette",
    image: "macintyre.png",
    info: [1, 2, 3, 5, 7, 8, 9]
  },
  {
    id: 6,
    name: "QLD Country Life",
    image: "qld_country_life.png",
    info: [1, 2, 7, 8, 11]
  },
  {
    id: 7,
    name: "WinNews Toowoomba",
    image: "winnews.jpg",
    info: [1, 2, 3, 7, 10, 11]
  },
  {
    id: 8,
    name: "Southern Free Times",
    image: "southern.png",
    info: [1, 2, 4, 5, 7, 8, 9]
  },
  {
    id: 9,
    name: "Chronicle",
    image: "chronicle.jpg",
    info: [1, 2, 4, 5, 6, 7, 8, 11]
  },
  {
    id: 10,
    name: "Rebel FM",
    image: "rebelfm.jpg",
    info: [1, 2, 4, 5, 7, 9, 10]
  }
];

const Button = withRouter(({ history }) => (
  <button
    type="button"
    className="btn btn-primary"
    id="continue-button"
    onClick={() => {
      history.push({
        pathname: "/form",
        advertisers: advertisers,
        chosenAdvertisers: chosenAdvertisers
      });
    }}
  >
    CONTINUE
  </button>
));

export default function Home() {
  return (
    <div>
      <header>
        <div id="page-name">
          <img id="logo-white" src="logo_white.png" alt="white logo" />
          &nbsp; ONE STOP EVENT REGISTRATION
        </div>
      </header>
      <div className="container">
        <div id="advertising-avenues-list">
          <div id="label">
            Please select the advertising avenues from below:
          </div>
          <AdvertiserList
            advertisers={advertisers}
            chosenAdvertisers={chosenAdvertisers}
          />
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
