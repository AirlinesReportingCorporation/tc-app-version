import Image from "next/image";
import Link from "next/link";
import main from "./scss/main.module.scss";
import Iframe from "react-iframe";
import "./page.module.css";

export default function Home() {
  return (
    <main className={main} style={{ backgroundColor: "#000" }}>
      <div style={{ width: "100%" }}>
        <div
          className="tc2021-header-container"
          style={main.tc2021HeaderContainer}
        >
          <div className="container" style={{ borderTop: "none" }}>
            <div className="row">
              <Link
                target="_blank"
                href="https://atpcodigital.co1.qualtrics.com/jfe/form/SV_cLQ4SgQDZfRd21E?utm_source=homepage-card"
              >
                <Image
                  width={1370} //Work on this to make it responsive
                  height={0}
                  style={{
                    maxWidth: "100%",
                    width: "100%",
                    height: "auto",
                    display: "inline-block",
                    margin: "auto",
                  }}
                  className="pb-3"
                  src="https://arctravelconnect.com/globalassets/Home2/TC-Website-Ad.png"
                  alt="ARC TravelConnect"
                />
              </Link>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="tc2021-header-image">
                  <Link href="/episodes">
                    <Image
                      width={600}
                      height={0}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        display: "inline-block",
                      }}
                      className="d-flex mx-auto"
                      src="https://arctravelconnect.com/globalassets/Home2/2022/tc22-homepage-jumbo.png"
                      alt="ARC TravelConnect"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <Image
                  width={622}
                  height={68}
                  style={{ height: "auto", maxWidth: "100%" }}
                  className="img-fluid d-flex mx-auto"
                  src="https://arctravelconnect.com/globalassets/Home2/2022/tc22-current-episode.png"
                  alt="ARC TravelConnect"
                />
                <div className="tc22-episode-box">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div
                          class="usa-embed-container mb-0"
                          style={{ border: "1px solid #808080" }}
                        >
                          <Iframe
                            width="700"
                            styles={{ height: "100%", maxWidth: "100%" }}
                            overflow="false"
                            src="https://www.youtube.com/embed/ylBV3q8-5IM"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></Iframe>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="tc22-current-copy">
                          <h2 className="text-white">
                            ARC TravelConnect Virtual Series: Growth and
                            Innovation at the Denver Airport
                          </h2>
                          <a
                            href="/episodes/growth-and-innovation-at-the-denver-international-airport/"
                            className="tc22-watchnow"
                          >
                            Watch Now{" "}
                            <i
                              className="fa fa-caret-right ml-2"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            background: "#232323",
            zIndex: "-1",
            marginTop: "-180px",
            paddingTop: "180px",
          }}
        >
          <div className="tc2021-virtual text-center">
            <div className="row">
              <div className="col-lg-12">
                <div className="tc2021-virtual-title">
                  What You'll Learn In This Series
                </div>
              </div>
            </div>
            <div className="row align-content-start text-left">
              <div className="col-lg-4">
                <div className="tc2021-virtual-inner">
                  <img
                    style={{ width: "100%" }}
                    className="pb-0 img-fluid"
                    src="https://arctravelconnect.com/globalassets/Home2/2022/tc22-traveldata.png"
                    alt="Travel Data & Trends"
                  />
                  <p>
                    Curious about the latest travel data and trends? We talk to
                    industry leaders about travel recovery post-pandemic, the
                    evolving fraud landscape, what consumer spending can tell us
                    about the future, and more.
                  </p>
                  <a
                    href="/episodes?filter=data-and-trends"
                    className="tc22-link bold"
                  >
                    Watch Episodes On <br />
                    This Topic{" "}
                    <i
                      className="fa fa-caret-right ml-2"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="tc2021-virtual-inner">
                  <img
                    style={{ width: "100%" }}
                    className="pb-0 img-fluid"
                    src="https://arctravelconnect.com/globalassets/Home2/2022/tc22-travelretailing.png"
                    alt="Travel Retailing"
                  />
                  <p>
                    Consumers want streamlined, easy-to-manage travel
                    experiences, no matter which channel they book through. We
                    converse with other experts about how to enhance the travel
                    retailing experience, with focus on distribtion, payments
                    and technology.
                  </p>
                  <a href="/episodes?retailing" className="tc22-link bold">
                    Watch Episodes On <br />
                    This Topic{" "}
                    <i
                      className="fa fa-caret-right ml-2"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="tc2021-virtual-inner">
                  <img
                    className="pb-0 img-fluid"
                    style={{ width: "100%" }}
                    src="https://arctravelconnect.com/globalassets/Home2/2022/tc22-travelinnovation.png"
                    alt="Travel Innovation "
                  />
                  <p>
                    Travel opens up the world to us - and opens our minds to new
                    ideas. We discuss work culture, the future of travel, and
                    other innovative topics with industry thought leaders.
                  </p>
                  <a
                    href="/episodes?filter=innovation"
                    className="tc22-link bold"
                  >
                    Watch Episodes On <br />
                    This Topic{" "}
                    <i
                      className="fa fa-caret-right ml-2"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tc22-stats">
          <div className="container">
            <div className="col-lg-12">
              <img
                className="img-fluid"
                src="https://arctravelconnect.com/globalassets/Home2/2022/tc22-stats.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="tc22-about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tc22-about-box">
                  <div class="tc2021-virtual-title">About This Series</div>
                  <img
                    className="img-fluid"
                    src="https://arctravelconnect.com/globalassets/Home2/2022/tc22-goal.png"
                    alt="The Goal is Connection"
                  />
                  <p>
                    The ARC TravelConnect Virtual Series brings together travel
                    industry leaders to discuss the trends shaping the future of
                    travel. The goal is connection: sparking meaningful
                    conversations across the travel ecosystem. As we navigate
                    fewer in-person events, ARC continues to offer the
                    thought-provoking content and connections of our
                    TravelConnect event in a virtual setting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tc2021-virtual-info">
          <div className="tc2021-questions">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 offset-lg-1 text-center">
                  <img
                    src="https://arctravelconnect.com/globalassets/Home2/2021/HAVE-ANY-QUESTIONS.png"
                    alt=""
                    style={{ maxwidth: "650px" }}
                  />
                  <div className="mt-3">
                    <span className="tc22-reachout">Please Reach Out To:</span>
                    <a
                      className="tc22-email-link"
                      href="mailto:TravelConnectTeam@arccorp.com"
                    >
                      TravelConnectTeam@arccorp.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tc2021-omni">
          <div className="container">
            <div className="row">
              <div
                className="col-md-12 text-left"
                style={{ position: "relative", zIndex: "8" }}
              >
                <img
                  style={{ paddingTop: "0", maxWidth: "960px" }}
                  src="https://arctravelconnect.com/globalassets/Home2/2021/OMNICHANNEL.svg"
                  alt=""
                />
                <p
                  style={{
                    maxWidth: "768px",
                    margin: "0 auto",
                    fontSize: "20px",
                    lineHeight: "30px",
                  }}
                >
                  Travelers use a variety of platforms to shop, buy and service
                  their trips. Today, travelers’ options are limited to the
                  purchase channel they use. Our industry is working to create
                  an omnichannel environment where travelers can buy anywhere
                  and receive service anywhere, with access to all the products
                  and perks they love.
                  <br />
                  <a
                    href="https://www2.arccorp.com/about-us/arc-omnichannel-retailing/"
                    target="_blank"
                    className="ctaBtn"
                  >
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="social" className="tc2021-social tcContainer">
          <div className="tcSocial">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="hashtag">#TravelConnect</div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div
                    className="social-subtitle"
                    style={{ marginTop: "30px" }}
                  >
                    <img
                      src="https://www2.arccorp.com/globalassets/home2/2020/homepage/find-us-on.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <a
                    href="https://www.facebook.com/ARCtalk"
                    title="facebook"
                    target="_blank"
                    className="icon-social icon-facebook"
                  ></a>
                </div>
                <div className="col">
                  <a
                    href="https://twitter.com/ARCtalk"
                    title="twitter"
                    target="_blank"
                    className="icon-social icon-twitter"
                  ></a>
                </div>
                <div className="col">
                  <a
                    href="https://www.linkedin.com/company/6509/"
                    target="_blank"
                    className="icon-social icon-linkedin"
                  ></a>
                </div>
                <div className="col">
                  <a
                    href="https://www.youtube.com/channel/UCWHZsoCDNhjorop892EVETw/"
                    target="_blank"
                    className="icon-social icon-youtube"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tc2021-assistance">
          <div className="tc2021-assistance-inner">
            <div className="container">
              <div className="row ">
                <div className="col-md-4">
                  <div className="tc2021-assistance-1">
                    Need <br />
                    Further <br />
                    Assistance?
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="tc2021-assistance-2">
                    <div className="tc2021-h2">General Inquiries</div>
                    GENERAL INQUIRIES
                    <strong>TravelConnect Team</strong>
                    <br />
                    <a href="mailto:TravelConnectTeam@arccorp.com">
                      TravelConnectTeam@arccorp.com
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="tc2021-assistance-2">
                    <div className="tc2021-h2">Press</div>
                    <strong>Randy Spoon</strong>
                    <br />
                    (703) 816-5119
                    <br />
                    <a href="mailto:rspoon@arccorp.com">rspoon@arccorp.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
