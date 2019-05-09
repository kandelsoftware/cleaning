import React from "react";

export default function Contact() {
  return (
    <div>
      <section class="section-form" id="contact">
        <div class="row">
          <h2>We're happy to hear from you</h2>
        </div>
        <div class="row">
          <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>
                Your Name: <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                Your Role:{" "}
                <select name="role[]" multiple>
                  <option value="leader">Leader</option>
                  <option value="follower">Follower</option>
                </select>
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message" />
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
