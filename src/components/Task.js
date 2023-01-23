import React from "react";
import Timer from "./Timer";

const Task = ({ name }) => {
  return (
    <div className="task">
      <h3 className="title">{name}</h3>
      <button className="btn">Start</button>
      <Timer time={130} />
    </div>
  );
};

export default Task;
