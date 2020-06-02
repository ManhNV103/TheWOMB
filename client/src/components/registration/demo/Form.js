
import React from "react";
import '../../../assets/scss/registration/index.scss'
import Navbar from '../layout/Navbar';

let infoSet = new Set();
let advertiserSet = new Set();
// add compulsary els.
for (var i = 1; i <= 13; i++) {
  infoSet.add(i);
}


const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const dateformatRegex = RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/);
const timeRegex = RegExp(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/);
const numberRegex = RegExp(/^[0-9]+$/);

const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event_title: null,
      start_date: null,
      end_date: null,
      start_time: null,
      end_time: null,
      cost: null,
      contact_name: null,
      contact_number: null,
      contact_email: null,
      errors: {
        event_title: '',
        start_date: '',
        end_date: '',
        start_time: '',
        end_time: '',
        cost: '',
        contact_name: '',
        contact_number: '',
        contact_email: '',
      }
    };

    props.location.advertisers.forEach(function (element) {
      if (props.location.chosenAdvertisers.has(element.id)) {
        element.info.forEach(function (e) {
          infoSet.add(e);
        });
        advertiserSet.add(element.email);
      }
    });

    this.elList = Array.from(infoSet).join(',');
    this.adsList = Array.from(advertiserSet).join();

  }


  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'event_title':
        errors.event_title =
          value.length < 5
            ? 'Full Name must be at least 5 characters long!'
            : '';
        break;
      case 'start_date':
        errors.start_date =
          dateformatRegex.test(value)
            ? ''
            : 'Date must follow the format dd/mm/yy';
        break;
      case 'end_date':
        errors.end_date =
          dateformatRegex.test(value)
            ? ''
            : 'Date must follow the format dd/mm/yy';
        break;
      case 'start_time':
        errors.start_time =
          timeRegex.test(value)
            ? ''
            : 'Time must follow the format hh:mm';
        break;
      case 'end_time':
        errors.end_time =
          timeRegex.test(value)
            ? ''
            : 'Time must follow the format hh:mm';
        break;
      case 'cost':
        errors.cost =
          numberRegex.test(value)
            ? ''
            : 'Cost must be a number';
        break;
      case 'contact_name':
        errors.contact_name =
          value.length < 5
            ? 'Name must be at least 5 characters long!'
            : '';
        break;
      case 'contact_number':
        errors.contact_number =
          numberRegex.test(value)
            ? ''
            : 'Phone number must only contain numbers';
        break;
      case 'contact_email':
        errors.contact_email =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info('Valid Form')
    } else {
      console.error('Invalid Form')
    }
  }

  onChangeTitle = (event) => {
    this.setState({ title: event.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <Navbar/>

        {/* <button
        className="this-button-debugging-only"
        id="button"
        onClick={handleClick}
      >
        Submit
      </button> */}

        <div className="registration-Container">
          <div className="row">
            <div className="col">
              <h1>REGISTRATION FORM</h1>
              <br /><br />
              <form id="event-form" method="POST" action='/process'>
                <input name="elList" type="hidden" value={this.elList} />
                <input name="adsList" type="hidden" value={this.adsList} />

                <div className="form-group">
                  <label>Event title</label>
                  <input type="text" name="event_title" className="form-control" onChange={this.handleChange} noValidate />
                  {errors.event_title.length > 0 &&
                    <span className='error'>{errors.event_title}</span>}
                </div>

                <div className="form-group">
                  <label>Start Date</label>
                  <input
                    type="text"
                    name="start_date"
                    className="form-control"
                    placeholder="dd/mm/yyyy"
                    onChange={this.handleChange} noValidate
                  />
                  {errors.start_date.length > 0 &&
                    <span className='error'>{errors.start_date}</span>}
                </div>

                <div className="form-group">
                  <label>Repeat Frequency</label><br />
                  <select className="form-control" name="frequency">
                    <option>Just this day</option>
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Fortnightly</option>
                    <option>Monthly</option>
                    <option>Yearly</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>End Date</label>
                  <input
                    type="text"
                    name="end_date"
                    className="form-control"
                    placeholder="dd/mm/yyyy"
                    onChange={this.handleChange} noValidate
                  />
                  {errors.end_date.length > 0 &&
                    <span className='error'>{errors.end_date}</span>}
                </div>

                <div className="form-group">
                  <label>Event start time</label>
                  <input
                    type="text"
                    name="start_time"
                    className="form-control"
                    placeholder="hh:mm"
                    onChange={this.handleChange} noValidate
                  />
                  {errors.start_time.length > 0 &&
                    <span className='error'>{errors.start_time}</span>}
                </div>

                <div className="form-group">
                  <label>Event end time</label>
                  <input
                    type="text"
                    name="end_time"
                    className="form-control"
                    placeholder="hh:mm"
                    onChange={this.handleChange} noValidate
                  />
                  {errors.end_time.length > 0 &&
                    <span className='error'>{errors.end_time}</span>}
                </div>

                <div className="form-group">
                  <label>Cost</label>
                  <input type="text" name="cost" className="form-control" placeholder="" onChange={this.handleChange} noValidate />
                  {errors.cost.length > 0 &&
                    <span className='error'>{errors.cost}</span>}
                </div>

                <div className="form-group">
                  <label>Location</label>
                  <input type="text" name="location" className="form-control" placeholder="" onChange={this.handleChange} noValidate />
                </div>

                <div className="form-group">
                  <label>Summary</label>
                  <textarea rows="3" name="summary" className="form-control" onChange={this.handleChange} noValidate />
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <textarea rows="3" name="description" className="form-control" onChange={this.handleChange} noValidate />
                </div>

                <div className="form-group">
                  <label>Contact name</label>
                  <input type="text" name="contact_name" className="form-control" placeholder="" onChange={this.handleChange} noValidate />
                  {errors.contact_name.length > 0 &&
                    <span className='error'>{errors.contact_name}</span>}
                </div>

                <div className="form-group">
                  <label>Contact phone number</label>
                  <input type="text" name="contact_number" className="form-control" placeholder="" onChange={this.handleChange} noValidate />
                  {errors.contact_number.length > 0 &&
                    <span className='error'>{errors.contact_number}</span>}
                </div>

                <div className="form-group">
                  <label>Contact email address</label>
                  <input type="text" name="contact_email" className="form-control" placeholder="" onChange={this.handleChange} noValidate />
                  {errors.contact_email.length > 0 &&
                    <span className='error'>{errors.contact_email}</span>}
                </div>



                {infoSet.has(14) ? (
                  <div className="form-group">
                    <label>Name of organisation</label>
                    <input type="text" name="organisation_name" className="form-control" placeholder="" />
                  </div>
                ) : (
                    ""
                  )}

                {infoSet.has(15) ? (
                  <div className="form-group">
                    <label>Event type</label>
                    <input type="text" name="event_type" className="form-control" placeholder="" />
                  </div>
                ) : (
                    ""
                  )}

                {infoSet.has(16) ? (
                  <div className="form-group">
                    <label>Audience</label>
                    <input type="text" name="audience" className="form-control" placeholder="" />
                  </div>
                ) : (
                    ""
                  )}

                <div className="form-group" id="submit-button-div">
                  <button className="btn" type="submit" disabled={!validateForm(this.state.errors)} value="submit" id="submit-button">
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
}

// export default function Form(props) {
//   // const handleClick = e => {
//   //   console.log(props.location.chosenAdvertisers.has(2));
//   // };
//   props.location.advertisers.forEach(function (element) {
//     if (props.location.chosenAdvertisers.has(element.id)) {
//       element.info.forEach(function (e) {
//         infoSet.add(e);
//       });
//       advertiserSet.add(element.email);
//     }
//   });


//   let elList = Array.from(infoSet).join(',');
//   let adsList = Array.from(advertiserSet).join();

//   myHandler = (e) => {x = e.target.value};

//   return (
//     <div>
//       <header>
//         <div id="page-name">
//           <img id="logo-white" src="logo_white.png" alt="logo" />
//           &nbsp; ONE STOP EVENT REGISTRATION
//         </div>
//       </header>

//       {/* <button
//         className="this-button-debugging-only"
//         id="button"
//         onClick={handleClick}
//       >
//         Submit
//       </button> */}

//       <div className="registration-Container">
//         <div className="row">
//           <div className="col">
//             <h1>REGISTRATION FORM</h1>
//             <br/><br/>
//             <form id="event-form" method="POST" action='/process'>
//               <input name="elList" type="hidden" value={elList} />
//               <input name="adsList" type="hidden" value={adsList} />

//               <div className="form-group">
//                 <label>Event title</label>
//                 <input type="text" name="event_title" className="form-control" onChange={} />
//               </div>

//               <div className="form-group">
//                 <label>Start Date</label>
//                 <input
//                   type="text"
//                   name="start_date"
//                   className="form-control"
//                   placeholder="dd/mm/yyyy"
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Repeat Frequency</label><br />
//                 <select className="form-control" name="frequency">
//                   <option>Just this day</option>
//                   <option>Daily</option>
//                   <option>Weekly</option>
//                   <option>Fortnightly</option>
//                   <option>Monthly</option>
//                   <option>Yearly</option>
//                 </select>
//               </div>


//               <div className="form-group">
//                 <label>End Date</label>
//                 <input
//                   type="text"
//                   name="end_date"
//                   className="form-control"
//                   placeholder="dd/mm/yyyy"
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Event start time</label>
//                 <input
//                   type="text"
//                   name="start_time"
//                   className="form-control"
//                   placeholder="hh:mm"
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Event end time</label>
//                 <input
//                   type="text"
//                   name="end_time"
//                   className="form-control"
//                   placeholder="hh:mm"
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Cost</label>
//                 <input type="text" name="cost" className="form-control" placeholder="" />
//               </div>

//               <div className="form-group">
//                 <label>Location</label>
//                 <input type="text" name="location" className="form-control" placeholder="" />
//               </div>

//               <div className="form-group">
//                 <label>Summary</label>
//                 <textarea rows="3" name="summary" className="form-control" />
//               </div>

//               <div className="form-group">
//                 <label>Description</label>
//                 <textarea rows="3" name="description" className="form-control" />
//               </div>

//               <div className="form-group">
//                 <label>Contact name</label>
//                 <input type="text" name="contact_name" className="form-control" placeholder="" />
//               </div>

//               <div className="form-group">
//                 <label>Contact phone number</label>
//                 <input type="text" name="contact_numer" className="form-control" placeholder="" />
//               </div>

//               <div className="form-group">
//                 <label>Contact email address</label>
//                 <input type="text" name="contact_email" className="form-control" placeholder="" />
//               </div>



//               {infoSet.has(14) ? (
//                 <div className="form-group">
//                   <label>Name of organisation</label>
//                   <input type="text" name="organisation_name" className="form-control" placeholder="" />
//                 </div>
//               ) : (
//                   ""
//                 )}

//               {infoSet.has(15) ? (
//                 <div className="form-group">
//                   <label>Event type</label>
//                   <input type="text" name="event_type" className="form-control" placeholder="" />
//                 </div>
//               ) : (
//                   ""
//                 )}

//               {infoSet.has(16) ? (
//                 <div className="form-group">
//                   <label>Audience</label>
//                   <input type="text" name="audience" className="form-control" placeholder="" />
//                 </div>
//               ) : (
//                   ""
//                 )}

//               <div className="form-group" id="submit-button-div">
//                 <button className="btn" type="submit" value="submit" id="submit-button">
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <footer className="page-footer">
//         <div className="footer-copyright text-center py-3">
//           © 2019 Goondiwindi Regional Council
//         </div>
//       </footer>
//     </div>
//   );
// }

