import { useEffect, useState } from 'react';
import styles from './taskbar.module.css'
import greenshield from "../../assets/green_shield.png";
import internet from "../../assets/internet.png";
import sound from "../../assets/sound.png";
import removabledevice from "../../assets/removabledevice.png";

const getTime = () => {
    const date = new Date()
    let hour = date.getHours()
    let hourPostFix = "AM";
    let min = date.getMinutes()
    if (hour >= 12) {
        hour -= 12;
        hourPostFix = "PM"
    }
    if (hour == 0) {
        hour = 12;
    }
    if (min < 10) {
        min = 0 + min
    }

    return `${hour}:${String(min).padStart(2, "0")} ${hourPostFix}`
}

const Taskbar = () => {
    const [time, setTime] = useState(getTime)

    useEffect(() => {
        const interval = setInterval(() => {
          setTime(getTime());
        }, 1000);
    
        return () => clearInterval(interval); // cleanup
      }, []);

    return(
        <div className={styles.taskbar}>
            <div className={styles.startbtn}>
            </div>

            <div className={styles.icontray}>
                <div className={styles.iconrow}>
                    <img 
                    width={15}
                    style={{ margin: "0px 3px 0px 3px" }}
                    height={15}
                    src={greenshield}
                    alt="Icon 1"
                    />
                    <img 
                    width={15}
                    style={{ margin: "0px 3px 0px 3px" }}
                    height={15}
                    src={internet}
                    alt="Icon 1"
                    />
                    <img 
                    width={15}
                    style={{ margin: "0px 3px 0px 3px" }}
                    height={15}
                    src={sound}
                    alt="Icon 1"
                    />
                    <img 
                    width={15}
                    style={{ margin: "0px 3px 0px 3px" }}
                    height={15}
                    src={removabledevice}
                    alt="Icon 1"
                    />
                </div>

                <div  style={{color: "white"}} className='time-display'>
                    {time}
                </div>
            </div>
        </div>
    )
}

export default Taskbar
