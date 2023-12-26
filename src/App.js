import Profile from "./Components/Profile";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Teacher from "./Components/Teacher";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Profile />

      <Router>
        <div>
          <nav>
            <ul>
              <li className="link">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="link">
              <Link to="/teacher">Teacher</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/teacher" element={<Teacher />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;