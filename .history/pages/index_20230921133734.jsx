import Image from "next/image";
import Link from "next/link";
import "../styles/main.module.scss";
import styles from "../styles/partials/page.module.scss";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#000" }}>
      <div style={{ width: "100%" }}>
        <div className={styles.tc2021HeaderContainer}>
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
              <div className="col-lg-12">
                <Image
                  width={622}
                  height={68}
                  style={{ height: "auto", maxWidth: "100%" }}
                  className="img-fluid d-flex mx-auto"
                  src="https://arctravelconnect.com/globalassets/Home2/2022/tc22-current-episode.png"
                  alt="ARC TravelConnect"
                />
                <div className={styles.tc22EpisodeBox}>
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div
                          class={"usa-embed-container mb-0"}
                          style={{ border: "1px solid #808080" }}
                        >
                          <iframe
                            width="700"
                            src="https://www.youtube.com/embed/ylBV3q8-5IM"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className={styles.tc22CurrentCopy}>
                          <h2 className="type-color-white">
                            ARC TravelConnect Virtual Series: Growth and
                            Innovation at the Denver Airport
                          </h2>
                          <a
                            href="/episodes/growth-and-innovation-at-the-denver-international-airport/"
                            className={styles.tc22WatchNow}
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
          <div className={styles.tc2021Virtual + " text-center"}>
            <div className="row">
              <div className="col-lg-12">
                <div className={styles.tc2021VirtualTitle + " type-color-white"}>
                  What You'll Learn In This Series
                </div>
              </div>
            </div>
            <div className="row align-content-start text-left">
              <div className="col-lg-4">
                <div className={styles.tc2021VirtualInner}>
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
                    className={styles.tc22Link}
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
                <div className={styles.tc2021VirtualInner}>
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
                  <a href="/episodes?retailing" className={styles.tc22Link}>
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
                <div className={styles.tc2021VirtualInner}>
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
                    className={styles.tc22Link}
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

        <div className={styles.tc22Stats}>
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

        <div className={styles.tc22About}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className={styles.tc22AboutBox}>
                  <div class={styles.tc2021VirtualTitle}>About This Series</div>
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

        <div className={styles.tc2021VirtualInfo}>
          <div className={styles.tc2021Questions}>
            <div className="container">
              <div className="row">
                <div className="col-lg-10 offset-lg-1" style={{textAlign:"center"}}>
                  <img
                    src="https://arctravelconnect.com/globalassets/Home2/2021/HAVE-ANY-QUESTIONS.png"
                    alt=""
                    style={{ maxwidth: "650px" }}
                  />
                  <div className="mt-3">
                    <span className={styles.tc22Reachout}>Please Reach Out To:</span>
                    <a
                      className={styles.tc22EmailLink}
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

        <div className={styles.tc2021Omni}>
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
                    className={styles.ctaBtn}
                  >
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="social" className={styles.tc2021Social + " tcContainer"}>
          <div className="tcSocial">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className={styles.hashtag}>#TravelConnect</div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div
                    className={styles.socialSubtitle}
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
                    className={styles.iconSocial + " icon-facebook"}
                  ></a>
                </div>
                <div className="col">
                  <a
                    href="https://twitter.com/ARCtalk"
                    title="twitter"
                    target="_blank"
                    className={styles.iconSocial + " icon-twitter"}
                  ></a>
                </div>
                <div className="col">
                  <a
                    href="https://www.linkedin.com/company/6509/"
                    target="_blank"
                    className={styles.iconSocial + " icon-linkedin"}
                  ></a>
                </div>
                <div className="col">
                  <a
                    href="https://www.youtube.com/channel/UCWHZsoCDNhjorop892EVETw/"
                    target="_blank"
                    className={styles.iconSocial + " icon-youtube"}
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.tc2021Assistance}>
          <div className={styles.tc2021AssistanceInner}>
            <div className="container">
              <div className="row ">
                <div className="col-md-4">
                  <div className={styles.tc2021Assistance1}>
                    Need <br />
                    Further <br />
                    Assistance?
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={styles.tc2021Assistance2}>
                    <div className={styles.tc2021H2}>General Inquiries</div>
                    GENERAL INQUIRIES
                    <strong>TravelConnect Team</strong>
                    <br />
                    <a href="mailto:TravelConnectTeam@arccorp.com">
                      TravelConnectTeam@arccorp.com
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={styles.tc2021Assistance2}>
                    <div className={styles.tc2021H2}>Press</div>
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
