import { useState } from "react";

import ArrowUp from "../../assets/images/arrow_up.png";

import "./collapses.scss"

const Collapses = (props) => {
  const [open, setOpen] = useState(false);
  const expended = () => {
    setOpen((position) => !position);
  };
  return (
    <ul id={`${props.title}-collapses`}>
      {props.data.map(collapse => {
        return (
          <li className="collapses-item" onClick={expended}>
            <h2>{collapse.$[props.titleLabel]}</h2>
            <img
              src={ArrowUp}
              id={`collapse-arrow ${open ? "reverse" : ""}`}
              alt="flèche"
            />
            {open && <div className="collapse-content">{collapse.$[props.contentLabel]}</div>}
          </li>
        )
      })}
    </ul>
  );
};
export default Collapses;