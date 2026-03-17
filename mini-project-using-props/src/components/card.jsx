import React from "react";
import { Bookmark } from "lucide-react";
import "../styles/cardstyle.css";
const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img src={props.image} alt="" />
        <button>
          Save <Bookmark className="bookmark" />
        </button>
      </div>
      <div className="center">
        <h3>
          {props.company} <span>{props.jobPosted}</span>
        </h3>
        <h2>{props.position}</h2>
        <div>
          <h4>{props.timing}</h4>
          <h4>{props.level} </h4>
        </div>
        <div className="line"></div>
      </div>
      <div className="bottom">
        <div>
          <h3>{props.salary} </h3>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
