import React from 'react';

const Contact = () => {
  return (
    <div className="contact" id="Contact">
      <p>If you have any questions about our service, please don't hesitate to contact us.</p>
      <form>
        <label for="name">Name</label><br/>
        <input type="text" id="name"></input><br/>
        <label for="email">E-mail</label><br/>
        <input type="text" id="email"></input><br/>
        <label for="message">Message</label><br/>
        <input type="text" id="message"></input><br/>
        <input type="button" value="Send" id="submit"></input>
      </form>
    </div>
  )
}

export default Contact;