import Link from "next/link";
import Image from "next/image";

import "../styles/partials/navbar.module.scss";

export default function NavBar() {
  return (
      <div className="tc2021-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="tc2021-nav d-lg-flex d-md-flex flex-row align-items-center">
                <Link className="tc2021-underline d-block" href="/">
                  <Image
                    width={225}
                    height={0}
                    className="tc2021-logo"
                    src="https://arctravelconnect.com/globalassets/Home2/2021/TCVS-LOGO.svg"
                    alt="Travel Connect Virtual Series"
                    style={{height: "auto"}}
                  />
                </Link>
                <Link className="tc-nav-link" href="/episodes">Episodes</Link>
                <Link className="tc-nav-link" href="/episodes?filter=data-and-trends">
                  Data & Trends
                </Link>
                <Link className="tc-nav-link" href="/episodes?filter=retailing">Retailing</Link>
                <Link className="tc-nav-link" href="/episodes?filter=innovation">Innovation</Link>
                <div className="arc-logo ml-lg-auto ml-md-auto d-sm-block">
                  <div className="d-flex justify-content-center">
                    <Link
                      target="_blank"
                      className="tc2021-underline con-social icon-facebook"
                      href="https://www.facebook.com/ARCtalk"
                    ></Link>
                    <Link
                      target="_blank"
                      className="tc2021-underline icon-social icon-twitter"
                      href="https://twitter.com/ARCtalk"
                    ></Link>
                    <Link
                      target="_blank"
                      className="tc2021-underline icon-social icon-linkedin"
                      href="https://www.linkedin.com/company/6509/"
                    ></Link>
                    <Link
                      target="_blank"
                      className="tc2021-underline icon-social icon-youtube"
                      href="https://www.youtube.com/channel/UCWHZsoCDNhjorop892EVETw/"
                    ></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}