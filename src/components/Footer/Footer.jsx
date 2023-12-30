import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="about">
          <h3 className=" about-heading">About Us</h3>
          <p className="about-paragraph">
            Ombrulla is an AI-driven company specializing in extracting insights
            from diverse data sources, including photos, videos, and data lakes.
            Our tailored solutions help businesses make data-driven decisions
            and improve their bottom line through automation and AI-powered
            analysis.
          </p>
          <div className="social-icons-container">
            <a href="https://www.facebook.com/Ombrulla.UK" class="social-icon">
              <span class="sr-only">Facebook</span>
              <div
                className="h-16 w-16 md:h-12 md:w-12 lg:w-8 lg:h-8 xl:h-6 xl:w-6"
                aria-hidden="true"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  astro-icon="facebook"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </div>
            </a>
            <a href="https://www.instagram.com/ombrulla/" class="social-icon">
              <span class="sr-only">Instagram</span>
              <div
                class="h-16 w-16 md:h-12 md:w-12 lg:w-8 lg:h-8 xl:h-6 xl:w-6"
                aria-hidden="true"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  astro-icon="instagram"
                >
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"></path>
                </svg>
              </div>
            </a>
            <a href="https://twitter.com/ombrulla" class="social-icon">
              <span class="sr-only">Twitter</span>
              <div
                class="h-16 w-16 md:h-12 md:w-12 lg:w-8 lg:h-8 xl:h-6 xl:w-6"
                aria-hidden="true"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  astro-icon="twitter"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.072 4.072 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.616 11.616 0 0 0 6.29 1.84"></path>
                </svg>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/ombrulla/"
              class="social-icon"
            >
              <span class="sr-only">LinkedIn</span>
              <div
                class="h-16 w-16 md:h-12 md:w-12 lg:w-8 lg:h-8 xl:h-6 xl:w-6"
                aria-hidden="true"
              >
                <svg
                  xml:space="preserve"
                  fill="currentColor"
                  stroke="#fff"
                  viewBox="-51.2 -51.2 614.4 614.4"
                  astro-icon="linkedin"
                >
                  <path
                    fill-rule="evenodd"
                    d="M116.504 500.219V170.654H6.975v329.564h109.529v.001zM61.751 125.674c38.183 0 61.968-25.328 61.968-56.953-.722-32.328-23.785-56.941-61.252-56.941C24.994 11.781.5 36.394.5 68.722c0 31.625 23.772 56.953 60.53 56.953h.721v-.001zm115.373 374.545s1.437-298.643 0-329.564H286.67v47.794h-.727c14.404-22.49 40.354-55.533 99.44-55.533 72.085 0 126.116 47.103 126.116 148.333V500.22H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531-30.254 0-48.284 20.38-56.202 40.08-2.897 7.012-3.602 16.861-3.602 26.711v184.047H177.124z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </a>
            <a
              href="https://www.youtube.com/channel/UCXAhwrvB4Yyw3mg7h4pzUUw"
              class="social-icon"
            >
              <span class="sr-only">YouTube</span>
              <div
                class="h-16 w-16 md:h-12 md:w-12 lg:w-8 lg:h-8 xl:h-6 xl:w-6"
                aria-hidden="true"
              >
                <svg
                  fill="currentColor"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  astro-icon="youtube"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>

        <div class="services-container">
          <h3 class="services-header">Our Services</h3>
          <div class="services-list">
            <p>AI Infrastructure Inspection</p>
            <p>AI Visual Inspection</p>
            <p>AI Data Analytics</p>
            <p>AI People Tracking</p>
          </div>
        </div>
        <div className="solutions-container">
          <h3 className=" solutions-header">Our Solutions</h3>
          <div className="solutions-list">
            <p>Asset Performance Management</p>
            <p>Job Grading & Evaluation</p>
            <p>Compensation Management</p>
          </div>
        </div>
        <div className="contact-container ">
          <h3 className="contact-header">Reach Us</h3>
          <div className="contact-list">
            <p>
              United Kingdom, 53 Denton close <br />
              Redhill, Surrey, RH1 5LB <br /> +44 787 999 3892
            </p>
            <p>
              Germany, Schützenstraße 51A <br />
              Lübeck, 23558 <br />
              +49 179 512 5812
            </p>
            <p>
              India, No. 154/20, Royal Space <br /> Third Floor TI, HSR Layout,{" "}
              <br />
              Bangalore, Karnataka <br /> 560102 <br /> +91 85900 56435
            </p>
          </div>
        </div>
      </div>
      <div class="footer-container">
        <p class="copyright-text">© 2020 Ombrulla, Inc. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
