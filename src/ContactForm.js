import React from 'react';


export default class ContactForm extends React.Component {
	render(){
	  return (
	  <div className="contact" id="con">
	  <h3 className="contact-header">Contact:</h3>
	    <form>
		  <label className="cf">Your Email Address*
	        <input className="cf" type="email" name="emailAddress" placeholder=" " required />
		  </label>
		  <label className="cf">Subject*
		    <input className="cf" type="text" name="subject" required/>
		   </label>
		   <label className="cf">
	        Message*
	       <textarea className="cf" name="paragraph" rows="10" cols="50"></textarea>
	      </label>
     	<button id="submit-button" className="submit">Submit</button>
	    </form>
	    </div>
	  );
	}
}


