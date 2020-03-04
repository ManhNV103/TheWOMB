import React from "react";

let elements = {
  1: "Event title",
  2: "Contact name"
};

let infoSet = new Set();
export default function Form(props) {
  // const handleClick = e => {
  //   console.log(props.location.chosenAdvertisers.has(2));
  // };
  props.location.advertisers.forEach(function(element) {
    if (props.location.chosenAdvertisers.has(element.id)) {
      element.info.forEach(function(e) {
        infoSet.add(e);
      });
    }
  });

  

  return (
    <div>
      <header>
        <div id="page-name">
          <img id="logo-white" src="logo_white.png" alt="logo" />
          &nbsp; ONE STOP EVENT REGISTRATION
        </div>
      </header>

      {/* <button
        className="this-button-debugging-only"
        id="button"
        onClick={handleClick}
      >
        Submit
      </button> */}

      <div className="container">
        <div className="row">
          <div className="col" id="one-stop-name">
            <h1>REGISTRATION FORM</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <form>
              <div className="details">EVENT DETAILS</div>
              <br/>
              {infoSet.has(1) ? (
                <div className="form-group">
                  <label>Event title</label>
                  <input type="text" className="form-control" />
                </div>
              ) : (
                ""
              )}

              {infoSet.has(2) ? (
                <div className="form-group">
                  <label>Start Date</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="dd/mm/yyyy"
                  />
                </div>
              ) : (
                ""
              )}

              {infoSet.has(3) ? (
                <div className="form-group">
                  <label>Duration of event</label>
                  <select className="form-control">
                    <option>Just this day</option>
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Fortnightly</option>
                    <option>Monthly</option>
                    <option>Yearly</option>
                  </select>
                </div>
              ) : (
                ""
              )}

              {infoSet.has(4) ? (
                <div className="form-group">
                  <label>End Date</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="dd/mm/yyyy"
                  />
                </div>
              ) : (
                ""
              )}

              {infoSet.has(5) ? (
                <div className="form-group">
                  <label>Event start time</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="hh:mm"
                  />
                </div>
              ) : (
                ""
              )}

              {infoSet.has(6) ? (
                <div className="form-group">
                  <label>Event end time</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="hh:mm"
                  />
                </div>
              ) : (
                ""
              )}

              {infoSet.has(7) ? (
                <div className="form-group">
                  <label>Cost</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
              ) : (
                ""
              )}

              {infoSet.has(8) ? (
                <div className="form-group">
                  <label>Summary</label>
                  <textarea rows="3" className="form-control" />
                </div>
              ) : (
                ""
              )}

              {infoSet.has(9) ? (
                <div className="form-group">
                  <label>Description</label>
                  <textarea rows="3" className="form-control" />
                </div>
              ) : (
                ""
              )}
              <br/>
              <div className="details">CONTACT DETAILS</div>
              <br/>
              <div className="form-group">
                <label>Contact name</label>
                <input type="text" className="form-control" placeholder="" />
              </div>

              <div className="form-group">
                <label>Contact phone number</label>
                <input type="text" className="form-control" placeholder="" />
              </div>


              <div className="form-group" id="submit-button-div">
                <button className="btn btn-primary" id="submit-button">
                  Submit
                </button>
              </div>
            </form>
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
