import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/IMG_6287.jpeg";
import "animate.css";
import "./ContactForm.css";
import TrackVisibility from "react-on-screen";

function Description() {
  return (
    // <div className="contact">
    //   <form
    //     name="contact"
    //     method="post"
    //     className="contact_form"
    //     data-netlify="true"
    //     onSubmit="submit"
    //   >
    //     <input type="hidden" name="form-name" value="contact" />
    //     <label for="name">Nom:</label>
    //     <input type="text" name="name" />

    //     <label for="email">Email:</label>
    //     <input type="email" name="email" />

    //     <label for="message">Message:</label>
    //     <textarea name="message"></textarea>

    //     <button type="submit">Envoyer</button>
    //   </form>
    //   <div>
    <section className="contact" id="connect">
      <Container>
        <h2>Get In Touch</h2>
        <form
          name="contact"
          method="post"
          className="contact_form"
          data-netlify="true"
          onSubmit="submit"
        >
          <input type="hidden" name="form-name" value="contact" />

          <Col size={12} sm={6} className="px-1">
            <input type="text" name="firstname" placeholder="First Name" />
          </Col>
          <Col size={12} sm={6} className="px-1">
            <input type="text" name="name" placeholder="Last Name" />
          </Col>
          <Col size={12} sm={6} className="px-1">
            <input type="email" name="email" placeholder="Email Address" />
          </Col>
          <Col size={12} sm={6} className="px-1">
            <input type="tel" name="tel" placeholder="Phone No." />
          </Col>
          <Col size={12} className="px-1">
            <textarea rows="6" name="message" placeholder="Message"></textarea>
            <button type="submit">
              <span>submit</span>
            </button>
          </Col>
        </form>
      </Container>
    </section>
    //   </div>
    // </div>
  );
}

export default Description;
