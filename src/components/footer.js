import React from "react";

export default function Footer() {
  return (
    <div>
      <footer>
        <div class="row">
          <div class="col span-1-of-2">
            <ul class="footer-nav">
              <li>
                <a href="#">About us</a>
              </li>
            </ul>
          </div>
          <div class="col span-1-of-2">
            <ul class="social-links">
              <li>
                <a href="#">
                  <i class="ion-social-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ion-social-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ion-social-googleplus" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ion-social-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <p>Copyright &copy; 2019 by cleaningcompany. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
