"use client";
import React, { useState, useEffect } from "react";
import NavBar from "../components/tc-nav-bar";
import { episodes } from "../content";

export default function Episodes() {
  let [filter, setFilter] = useState("");

  useEffect(() => {
    let urlSearchParams = new URLSearchParams(window.location.search);
    let params = Object.fromEntries(urlSearchParams.entries());
    if (params.filter) {
      console.log(params.filter);
      console.log(filter);
      setFilter(params.filter);
    }
  });

  function setSelectFilter(e) {
    var value = e.target.value;
    var url = window.location.pathname + "?filter=" + value;
    window.location.href = url;
  }

  function episodeFilter(episode) {
    /*
        if filter equals the episodes tag - > show it
        otherwise hide everything else
      */
    var tags = episode.tags.toLowerCase();

    if (filter === "") {
      return true;
    } else if (
      filter == "data-and-trends" &&
      tags.indexOf("data") > -1
    ) {
      return true;
    } else if (
      filter == "retailing" &&
      tags.indexOf("retailing") > -1
    ) {
      return true;
    } else if (
      filter == "innovation" &&
      tags.indexOf("innovation") > -1
    ) {
      return true;
    }

    return false;
  }

  return (
    <div className="tc-22-white" style={{ width: "100%" }}>
      <div className="tc2021-main tc2021-main-v tc-22-white">
        <div className="tc2020-episode-container">
          <div className="tc2020-episode-title">
            <img
              src="https://arctravelconnect.com/globalassets/Home2/2022/tc22-episodes.png"
              alt="Episodes"
            />
          </div>
          <div className="episode-sort">
            SORT:
            <select className="episode-filter" onChange={setSelectFilter}>
              <option value="">All</option>
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

          <div className="tc2020-episode-list">
            <div className="row">
              {episodes
                .slice(0)
                .reverse()
                .map((episode, i) => {
                  return (
                    <div
                      key={i}
                      className={"col-lg-4 "}
                      style={{
                        display: episodeFilter(episode) ? "block" : "none",
                      }}
                      id={"episode-" + episode.episode}
                    >
                      <div className="tc2020-episode">
                        <div className="episode-num">{episode.episode}</div>
                        <div className="episode-inner">
                          <div className="episode-date">{episode.date}</div>
                          <div className="episode-name">{episode.name}</div>
                          <div className="dot"></div>
                          <div className="episode-tags">{episode.tags}</div>
                          <div className="episode-button">
                            <a className="ctaBtn" href={episode.link}>
                              View Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
