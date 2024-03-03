import {useRef, useState} from 'react'

import ArrowUp from "../../assets/images/arrow_up.png"

const Collapse = ({title, data}) => {
    const [open, setOpen] = useState(false)
    const headerRef = useRef()
    const contentRef = useRef()
    const expended = () => {
        setOpen(position => !position)
    }
    return (
        <div className="collapses">
            <div ref={headerRef} className='collapse-header' onClick={expended}>
                <h3>{title}</h3>
                <img src={ArrowUp} className={`collapse-arrow ${open ? "collapse-arrowReverse" : ""}`} alt="flèche" />
            </div>
            <div className={"collapse-container"} ref={contentRef} 
                style={open ? { 
                    height: contentRef.current?.scrollHeight + "px",
                    transform: "translateY(0px)" 
                } : 
                { 
                    height: "0px",
                    transform: `translateY(${"-" + headerRef.current?.scrollHeight + "px" })` 
                }}>
                <div className='collapse-data'>{data}</div>
            </div>
        </div>       
    )
}
export default Collapse