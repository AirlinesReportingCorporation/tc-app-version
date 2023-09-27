import Image from "next/image";
import { episodes } from "../../content";
import { Fragment } from "react";
import styles from "../../styles/partials/episode.module.scss";
import Layout from "@/components/layout";
import main from "../../styles/main.module.scss";

export default function EpisodePage({ episode }) {
  episode = JSON.parse(episode);
  console.log(episode.title)

  // render episode here
  return (
    <Fragment>
      <div className={styles["tc2020-article-top"]}>
        <div className={styles["tc2020-article-container"]}>
          <div
            className={
              styles[`${"tc2020-article-episode2"}`] +
              " d-flex align-items-center justify-content-center"
            }
          >
            <Image
              width={300}
              height={70}
              className={styles["tc2023-img"]}
              src="https://arctravelconnect.com/globalassets/Home2/2020/virtual/episode.svg"
            />
            {episode.episode}
          </div>
          <div className={styles["tc2020-article-title"]}>{episode.title}</div>
        </div>
      </div>
      <div className={main["tc-22-white"]}>
        <div className={styles["tc2020-article-conent"]}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className={styles["usa-embed-container"]}>
                  <iframe
                    width="700px"
                    src={"https://www.youtube.com/embed/" + episode.embedUrl}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
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
                {episode.description.map((p) => {
                  return <p>{p}</p>;
                })}
              </div>
              <div className="col-lg-4">
                <div className={styles["tc22-speaker-titles"]}>
                  <img
                    src="https://arctravelconnect.com/globalassets/Home2/2022/tc22-industrytopics.png"
                    alt=""
                  />
                </div>
                <div className={styles["tc22-episode-detail"]}>
                  {episode.tags.split(",").map((tag, i) => {
                    return (
                      <div>
                        <a href="">
                          {tag}
                          <i
                            className="fa fa-caret-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                        <br />
                        <br />
                      </div>
                    );
                  })}
                </div>
                <div
                  className={styles["tc22-speaker-titles"]}
                  style={{
                    display: episode.speakers ? "block" : "none",
                  }}
                >
                  <img
                    src="https://arctravelconnect.com/globalassets/Home2/2022/tc22-industryspeakers.png"
                    alt=""
                  />
                </div>
                <div
                  className={styles["tc22-episode-detail"]}
                  style={{
                    display: episode.speakers ? "block" : "none",
                  }}
                >
                  {episode.speakers.map((speaker, i) => {
                    return (
                      <div className={styles["tc22-speaker-logo"]}>
                        <img
                          style={{ maxWidth: "105px", width: "100%" }}
                          src={speaker}
                        ></img>
                      </div>
                    );
                  })}
                </div>
                <div className={styles["tc22-speaker-titles"]}>
                  <img
                    src="https://arctravelconnect.com/globalassets/Home2/2022/tc22-releasedate.png"
                    alt=""
                  />
                </div>
                <div className={styles["tc22-episode-detail"]}>
                  {episode.date}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

EpisodePage.getLayout = (page) => {
  return (
    <div className={main["tc-landing-page"]}>
      <Layout>{page}</Layout>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const episodeList = episodes.filter(
    (episode) => episode.link.toString() === params.slug
  );
  return {
    props: {
      episode: JSON.stringify(episodeList[0]),
    },
  };
}

export async function getStaticPaths() {
  const paths = episodes.map((episode) => ({
    params: { slug: episode.link },
  }));
  console.log(paths);

  return { paths, fallback: false };
}
