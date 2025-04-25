import "xp.css/dist/XP.css";
import Draggable from "react-draggable"
import ReactDOM from "react-dom"
import "./styles.css";
import React, {useRef} from "react";

import Taskbar from "./components/taskbar/taskbar";
import DesktopIcon from "./components/DesktopIcon/DesktopIcon";

import mycomputer from "../src/assets/mycomputer.png"
import resume from "../src/assets/pdf.png"

function App() {
  const nodeRef = useRef(null)
  const a = "My first program"

  const handleOpenResume = () => {
    window.open("./Resume.pdf")
  }

  return ( 
    <div className="App">
      <div
        className="icons"
      >
        <DesktopIcon 
          title = "My Computer"
          img = {mycomputer}
          appId = {1}
        />

        <DesktopIcon 
          title = "Resume"
          img = {resume}
          appId = {2}
          doubleClick={handleOpenResume}
        />

      </div>

      <Draggable handle="strong" nodeRef={nodeRef}>
        <span ref={nodeRef}>
          <header className="App-header" style={{userSelect: 'none'}}>
              <div className="window" style={{margin: 32 , width: 250}}>
                <strong>
                  <div className ="title-bar">

                  <div className="title-bar-text">
                    {a}
                  </div>

                  <div className="title-bar-controls">
                    <button aria-label="Minimize" />
                    <button aria-label="Maximize" />
                    <button aria-label="Close" />
                  </div>

                  </div>
                </strong>
                <div className="window-body">
                    <p>Hello, world!</p>
                </div>
              </div>
          </header>
        </span>
      </Draggable>  
      
      <Taskbar />
    </div>
  );
}

export default App;
