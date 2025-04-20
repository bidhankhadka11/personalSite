// import Home from '../components/Home'
// import About from '../components/About'
// import Skils from '../components/Skills'
// import Projects from '../components/Projects'
// import Contact from '../components/Contact'
import "xp.css/dist/XP.css";
import "./styles.css";
import Taskbar from "./components/taskbar/taskbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="window" style={{margin: 32 , width: 250}}>
          <div className ="title-bar">

            <div className="title-bar-text">
              My first Program
            </div>

            <div className="title-bar-controls">
              <button aria-label="Minimize" />
              <button aria-label="Maximize" />
              <button aria-label="Close" />
            </div>

          </div>

          <div className="window-body">
              <p>Hello, world!</p>
          </div>
        </div>
        {/* <Home /> */}
        {/* <About /> */}
      </header>
      <Taskbar />
    </div>
  );
}

export default App;
