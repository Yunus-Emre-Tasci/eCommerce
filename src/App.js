import "./App.css";
import { BrowserRouter as Router,Routes,Route,Link, } from "react-router-dom";
import Navbar from "./components/Navbar";


const App=()=>{
  return(
    <Router>
      <div>
        <Navbar/>
        <div id="content">
          <Routes >
          < Route path = "/"
          component = {
            Home
          }
          />
        </Routes>
        </div>
      </div>
    </Router>
  )
}

function Home() {
  return <h2 > Home </h2>;
}

export default App;








