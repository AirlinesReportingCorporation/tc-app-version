import "./footer.scss";

import Link from "next/link";

export default function TCFooter() {
  return (
    <div className="travelconnect">
      <div className="footer-inside">
        <div className="rtf">
          <p>
            <img
              style={{ height: "25px", marginRight: "20px" }}
              alt=""
              src="https://arctravelconnect.com/globalassets/home2/tc2017-arc-logo-white.png"
            />
          </p>
          <p></p>
          <p>
            <span>
              © Airlines Reporting Corporation (ARC). All rights reserved.
            </span>
          </p>
          <p>&nbsp;</p>
          <span class="footer-rtf-links">
            <a
              href="https://www2.arccorp.com/website-terms-of-use/"
              title="Site Terms of Use"
              target="_blank"
            >
              Site Terms of Use
            </a>

            <a
              href="https://www2.arccorp.com/site-privacy-policy/"
              title="Privacy"
              target="_blank"
            >
              Privacy
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
