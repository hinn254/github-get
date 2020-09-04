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
  }, [stats]);

  return (
    <div>
      <p>REPOOOOS</p>
      <p>{info.repos_url}</p>
      <FlipMove>
        {stats.map((stat) => (
          <>
            <p>{stat.label}</p>
            <p>{stat.value}</p>
            <p>{stat.color}</p>
          </>
        ))}
      </FlipMove>
    </div>
  );
};

export default Repo;
