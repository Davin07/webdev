import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Signupteacher from "./components/signupteacher/Signupteacher"
import Signup from './components/signup/Signup'
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Signup/>
        <Signupteacher/>
      </div>
    </div>
  );
}

export default App;
