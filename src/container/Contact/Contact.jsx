import React from 'react';

const Contact = () => {
  return (
    <div className="contact" id="Contact">
      <p>If you have any concerns or questions about our service, please dont hesitate to contact us.</p>
      <form>
        <label for="name">Your Name:</label><br/>
        <input type="text" id="name"></input><br/>
        <label for="email">Your E-amil address:</label><br/>
        <input type="text" id="email"></input><br/>
        <label for="message">Your Message:</label><br/>
        <input type="text" id="message"></input><br/>
        <input type="button" value="Submit" id="submit"></input>
      </form>
    </div>
  )
}

export default Contact;