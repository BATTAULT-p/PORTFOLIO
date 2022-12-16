import React from "react";
import "./ContactForm.css";

function ContactForm() {
  return (
    <div className="meContacter">
      <div className="contactDescription">
        <h2>
          Un projet ? Une question ?{" "}
          <span className="bold">Contactez-moi.</span>
        </h2>
        <h3>PAUL BATTAULT</h3>
        <a href="tel:+33640899380">T. 06 40 89 93 80</a>
      </div>
      <section className="contact" id="connect">
        <form
          name="contact"
          method="post"
          className="contact_form"
          data-netlify="true"
          onSubmit="submit"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="firstname" placeholder="Prénom" />
          <input type="text" name="name" placeholder="Nom" />
          <input type="email" name="email" placeholder="Email" />
          <input type="tel" name="tel" placeholder="Numéro de téléphone" />
          <textarea rows="6" name="message" placeholder="Message" />
          <button type="submit">Envoyer</button>
        </form>
      </section>
    </div>
  );
}

export default ContactForm;
