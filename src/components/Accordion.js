import React from "react";
import "./accordion.css";
import { useState } from "react";

const Accordion = ({ infos }) => {
  const [select, setSelect] = useState(null);

  const toggle = (i) => {
    if (select == i) {
      return setSelect(null);
    }
    setSelect(i);
  };

  return (
    <div className="accordion">
      {infos.map((item, i) => (
        <div className="item">
          <div className="title" onClick={() => toggle(i)}>
            <h2>{item.question}</h2>
            <span>{select == i ? "-" : "+"}</span>
          </div>
          <div className={select == i ? "content show" : "content"}>{item.answer}</div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
