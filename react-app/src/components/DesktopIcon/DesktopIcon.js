import styles from "./DesktopIcon.css"
import {useState, useRef, useEffect} from "react"

const DesktopIcon = ({title, img, appId, doubleClick}) => {
    const [selected, setSelected] =  useState(false);
    return (
        <div 
            className="icon" 
            style={{userSelect: 'none'}}
            onDoubleClick={doubleClick}
        >
            <div className="iconimage">
                <img src = {img} width = {45} height = {45} alt = "icon" / >
            </div>
            <div className="icontitle">
                <p>{title}</p>
            </div>
        </div>
    )
}

export default DesktopIcon;

