import React from "react";

export default function Contact() {
  return (
    <div>
      <section class="section-form" id="contact">
        <div class="row">
          <h2>We're happy to hear from you</h2>
        </div>
        <div class="row">
          <form
            name="contact"
            method="POST"
            data-netlify-recaptcha="true"
            data-netlify="true"
          >
            <p>
              <label>
                Email: <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message" />
              </label>
            </p>
            <div data-netlify-recaptcha="true" />
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
