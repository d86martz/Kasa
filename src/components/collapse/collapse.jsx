import { useState } from "react";

import "./collapse.scss"

import ArrowUp from "../../assets/images/arrow_up.png";

const Collapse = (props) => {
  const [open, setOpen] = useState(false);
  const expended = () => {
    setOpen((position) => !position);
  };
  return (
    <div className="collapse">
      <div className="collapse-header" onClick={expended}>
        <h2>{props.title}</h2>
        <img
          src={ArrowUp}
          className={`collapse-arrow ${open ? "reverse" : ""}`}
          alt="flèche"
        />
      </div>
      {open && <div className="collapse-content">{props.data}</div>}
    </div>
  );
};
export default Collapse;
