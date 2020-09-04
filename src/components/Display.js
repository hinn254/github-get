import React from "react";
import { FaAt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Display = ({ info }) => {
  return (
    <div>
      <figure>
        <img className="image" src={info.avatar_url} alt="avatar_url" />
      </figure>
      <h1 className="name">{info.name} </h1>
      <h3 className="login">
        <a href={info.html_url}>
          {" "}
          <FaAt />
          {info.login}
        </a>
      </h3>
      <div className="location-time">
        <h3 className="location">
          <span>
            <MdLocationOn />
          </span>
          {info.location}
        </h3>
        <h3 className="time">
          <span>
            <FaClock />
          </span>
          {info.created_at}
        </h3>
      </div>
      <div className="popularity">
        <div className="disp">
          <h3 className="intro">{info.followers} </h3>
          <h3 className="intro-val">FOLLOWERS </h3>
        </div>
        <div className="disp">
          <h3 className="intro">{info.public_repos} </h3>
          <h3 className="intro-val">REPOSITORIES </h3>
        </div>
        <div className="disp">
          <h3 className="intro"> {info.following} </h3>
          <h3 className="intro-val">FOLLOWING </h3>
        </div>
      </div>
    </div>
  );
};

export default Display;
