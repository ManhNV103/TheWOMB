import React from "react";

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div id="page-name">
            <img id="logo-white" src="logo_white.png" alt="logo" />
            &nbsp; ONE STOP EVENT REGISTRATION
          </div>
        </header>

        <div class="container">
          <div class="row">
            <div class="col" id="one-stop-name">
              <h1>REGISTRATION FORM</h1>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <form>
                <div class="form-group">
                  <label>Event title</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="form-group">
                  <label>Start Date</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="dd/mm/yyyy"
                  />
                </div>
                <div class="form-group">
                  <label>Duration of event</label>
                  <select class="form-control">
                    <option>Just this day</option>
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Fortnightly</option>
                    <option>Monthly</option>
                    <option>Yearly</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>End Date</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="dd/mm/yyyy"
                  />
                </div>
                <div class="form-group">
                  <label>Event start time</label>
                  <input type="text" class="form-control" placeholder="hh:mm" />
                </div>
                <div class="form-group">
                  <label>Event end time</label>
                  <input type="text" class="form-control" placeholder="hh:mm" />
                </div>
                <div class="form-group">
                  <label>Cost</label>
                  <input type="text" class="form-control" placeholder="" />
                </div>
                <div class="form-group">
                  <label>Summary</label>
                  <textarea rows="3" class="form-control" />
                </div>
                <div class="form-group">
                  <label>Description</label>
                  <textarea rows="3" class="form-control" />
                </div>
                <div class="form-group">
                  <label>Contact name</label>
                  <input type="text" class="form-control" placeholder="" />
                </div>
                <div class="form-group">
                  <label>Contact phone number</label>
                  <input type="text" class="form-control" placeholder="" />
                </div>
                <div class="form-group" id="submit-button-div">
                  <button class="btn btn-primary" id="submit-button">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <footer class="page-footer">
          <div class="footer-copyright text-center py-3">
            © 2019 Goondiwindi Regional Council
          </div>
        </footer>
      </div>
    );
  }
}
