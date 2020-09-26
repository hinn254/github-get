import React, { useState, useEffect } from "react";
import FlipMove from "react-flip-move";

// Dependencies
var GhPolyglot = require("gh-polyglot");

const Repo = ({ info }) => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    // Stats about git-stats
    var me = new GhPolyglot(`${info.login}/git-stats`);
    // Repository stats
    // me.repoStats(function (err, stats) {
    //   console.log(err || stats);
    // });

    // User stats
    me.userStats(function (err, stats) {
      console.log(err || stats);
      console.log("**********");
      console.log(stats);
      setStats(stats);
    });
  }, [info.login]);

  return (
    <div>
      <p>REPOOOOS</p>
      <p>{info.repos_url}</p>
      <FlipMove>
        <div className="info-container">
          {stats.map((stat) => (
            <div key={stat.color} className="info-box">
              <p className="label">Language: {stat.label}</p>
              <p>Repositories {stat.value}</p>
              <p>Stats {stat.color}</p>
            </div>
          ))}
        </div>
      </FlipMove>
    </div>
  );
};

export default Repo;
