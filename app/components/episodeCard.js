

export default function EpisodeCard(props) {
     return (
        <div style={{ width: "100%" }}>
        <div className="tc2021-main tc2021-main-v">
          <div class="tc2020-article-top">
            <div class="tc2020-article-container">
              <div class="tc2020-article-episode2 d-flex align-items-center justify-content-center">
                <img src="https://arctravelconnect.com/globalassets/Home2/2020/virtual/episode.svg" />
                {episodes[props.number - 1].episode}
              </div>
              <div class="tc2020-article-title">
                {episodes[props.number - 1].title}
              </div>
            </div>
          </div>

          <div className="tc-22-white">
            <div class="tc2020-article-conent">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div class="usa-embed-container">
                      <iframe
                        width="700px"
                        src={
                          "https://www.youtube.com/embed/" +
                          episodes[props.number - 1].embedUrl
                        }
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8">
                    <img
                      src="https://arctravelconnect.com/globalassets/Home2/2022/tc22-about-episode.png"
                      style={{ marginBottom: "60px" }}
                      alt=""
                    />
                    <p>{episodes[props.number - 1].description}</p>
                  </div>
                  <div className="col-lg-4">
                    <div className="tc22-speaker-titles">
                      <img
                        src="https://arctravelconnect.com/globalassets/Home2/2022/tc22-industrytopics.png"
                        alt=""
                      />
                    </div>
                    <div className="tc22-episode-detail">
                      {episodes[props.number - 1].tags
                        .split(",")
                        .map((tag, i) => {
                          return (
                            <>
                              <a href="">
                                {tag}
                                <i
                                  className="fa fa-caret-right ml-2"
                                  aria-hidden="true"
                                ></i>
                              </a>
                              <br />
                              <br/>
                            </>
                          );
                        })}
                    </div>
                    <div
                      className="tc22-speaker-titles"
                      style={{
                        display: episodes[props.number - 1].speakers
                          ? "block"
                          : "none",
                      }}
                    >
                      <img
                        src="https://arctravelconnect.com/globalassets/Home2/2022/tc22-industryspeakers.png"
                        alt=""
                      />
                    </div>
                    <div
                      className="tc22-episode-detail"
                      style={{
                        display: episodes[props.number - 1].speakers
                          ? "block"
                          : "none",
                      }}
                    >
                      {episodes[this.props.number - 1].speakers.map((speaker, i) => {
                          return (
                            <div className="tc22-speaker-logo">
                              <img style={{maxWidth: "105px", width: "100%"}} src={speaker}>
                              </img>
                            </div>
                          );
                        })}
                    </div>
                    <div className="tc22-speaker-titles">
                      <img
                        src="https://arctravelconnect.com/globalassets/Home2/2022/tc22-releasedate.png"
                        alt=""
                      />
                    </div>
                    <div className="tc22-episode-detail">
                      {episodes[props.number - 1].date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     )
}