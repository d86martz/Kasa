import { useState } from "react";

import "./collapses.scss"

import ArrowUp from "../../assets/images/arrow_up.png";

const Collapses = (props) => {
  const [open, setOpen] = useState(false);
  const expended = () => {
    setOpen((position) => !position);
  };
  return (
    <div id="collapses">
      <ul id="collapsesList">
        <li className="collapsesList-item">
          <div id={props.title} onClick={expended}>
            <h2>{props.title}</h2>
            <img
              src={ArrowUp}
              id={`collapse-arrow ${open ? "reverse" : ""}`}
              alt="flèche"
            />
          </div>
          {open && <div className="collapse-content">{props.content}</div>}
        </li>
      </ul>
    </div>
  );
};
export default Collapses;
