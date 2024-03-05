import { useState } from 'react'

import ArrowUp from '../../assets/images/arrow_up.png'

const Collapse = (props) => {
  const [open, setOpen] = useState(false)
  const expended = () => {
    setOpen((position) => !position)
  };
  return (
    <div className="collapse">
      <div className="collapse-header" onClick={expended}>
        <h3>{props.title}</h3>
        <img
          src={ArrowUp}
          className={`collapse-arrow ${open ? "collapse-arrowReverse" : ""}`}
          alt="flèche"
        />
      </div>
      {open && <div className="collapse-content">{props.data}</div>}
    </div>
  );
};
export default Collapse
