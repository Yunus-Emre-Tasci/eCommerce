import "./App.css";
import { BrowserRouter as Router,Routes,Route,Link, } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";


const App=()=>{
  return(
    <Router>
      <div>
        <Navbar/>
        <div id="content">
        <Routes >
          <Route path = "/" component = {Home}/>
          <Route path = "/signin" element = {<Signin/>}/>
          < Route path = "/signup"
          element = {
            <Signup/>
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








