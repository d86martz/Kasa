import { useState } from "react";

import ArrowUp from "../../assets/images/arrow_up.png";

import "./collapse.scss"

const Collapse = (props) => {
  const [open, setOpen] = useState(false);
  const expended = () => {
    setOpen((position) => !position);
  };
  return (
    <div id="collapse" onClick={expended}>
      <div className="collapse-header">
        <h2>{props.title}</h2>
        <img
          src={ArrowUp}
          className={`collapse-arrow ${open ? "reverse" : ""}`}
          alt="flèche"
        />
      </div>
      {open && <div className="collapse-content">{props.content}</div>}
    </div>
  )
};
export default Collapse;