import "xp.css/dist/XP.css";
import Draggable from "react-draggable"
import ReactDOM from "react-dom"
import "./styles.css";
import Taskbar from "./components/taskbar/taskbar";
import React, {useRef} from "react";

function App() {
  const nodeRef = useRef(null)
  const a = "My first program"
  return (
    <div className="App">

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
