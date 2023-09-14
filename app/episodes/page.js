"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { episodes } from "../content";
import styles from "./episodes.module.scss";

export default function Episodes() {
  let [filter, setFilter] = useState("");
  const router = useRouter();

  console.log(episodes)

  useEffect(() => {
    let urlSearchParams = new URLSearchParams(window.location.search);
    let params = Object.fromEntries(urlSearchParams.entries());
    if (params.filter) {
      setFilter(params.filter);
    } else {
      setFilter("");
    }
  });

  function setSelectFilter(e) {
    var value = e.target.value;
    var url = window.location.pathname + "?filter=" + value;
    router.push(url);
  }

  function episodeFilter(episode) {
    /*
        if filter equals the episodes tag - > show it
        otherwise hide everything else
      */
    var tags = episode.tags.toLowerCase();

    if (filter === "") {
      return true;
    } else if (filter == "data-and-trends" && tags.indexOf("data") > -1) {
      return true;
    } else if (filter == "retailing" && tags.indexOf("retailing") > -1) {
      return true;
    } else if (filter == "innovation" && tags.indexOf("innovation") > -1) {
      return true;
    }

    return false;
  }

  return (
    <>
      <div className={styles["tc2020-episode-title"]}>
        <img
          src="https://arctravelconnect.com/globalassets/Home2/2022/tc22-episodes.png"
          alt="Episodes"
        />
      </div>
      <div className={styles["episode-sort"]}>
        SORT:
        <select className={styles["episode-filter"]} onChange={setSelectFilter}>
          <option selected={filter == "" ? true : false} value="">
            All
          </option>
          <option
            selected={filter == "data-and-trends" ? true : false}
            value="data-and-trends"
          >
            Data and Trends
          </option>
          <option
            selected={filter == "retailing" ? true : false}
            value="retailing"
          >
            Retailing
          </option>
          <option
            selected={filter == "innovation" ? true : false}
            value="innovation"
          >
            Innovation
          </option>
        </select>
      </div>

      <div className={styles["tc2020-episode-list"]}>
        <div className="row">
          {episodes
            .slice(0)
            .reverse()
            .map((episode, i) => {
              return (
                <div
                  key={i}
                  className="col-lg-4"
                  style={{
                    display: episodeFilter(episode) ? "block" : "none",
                  }}
                  id={"episode-" + episode.episode}
                >
                  <div className={styles["tc2020-episode"]}>
                    <div className={styles["episode-num"]}>{episode.episode}</div>
                    <div className={styles["episode-inner"]}>
                      <div className={styles["episode-date"]}>{episode.date}</div>
                      <div className={styles["episode-name"]}>{episode.name}</div>
                      <div className={styles["dot"]}></div>
                      <div className={styles["episode-tags"]}>{episode.tags}</div>
                      <div className={styles["episode-button"]}>
                        <Link className={styles["ctaBtn"]} href={'/episodes/' + episode.link}>
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
