import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from '../layout/Navbar';
import AdvertiserList from "./AdvertiserList";
import Footer from "../layout/Footer";
import { advertisers } from "./dump.js";
let chosenAdvertisers = new Set([]);


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
      <Navbar />
      <div className="home-container">
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
      <Footer/>
    </div>
  );
}