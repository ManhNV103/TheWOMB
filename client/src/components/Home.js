import React from "react";
import { withRouter } from "react-router-dom";

import AdvertiserList from "./AdvertiserList";
import useApi from '../util/useApi';

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

const Button = withRouter(({ history }) => (
  <button
    type="button"
    className="btn btn-primary"
    id="continue-button"
    onClick={() => {
      history.push({
        pathname: "/form",
        advertisers: [],
        chosenAdvertisers: chosenAdvertisers
      });
    }}
  >
    CONTINUE
  </button>
));

export default function Home() {
  const advertisers = useApi('/advertisers', {})

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
