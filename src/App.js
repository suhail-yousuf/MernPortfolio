import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Education from "./Pages/Education/Education";
import Project from "./Pages/Project/Project";
import Tech from "./Pages/Tech/Tech";
import Workexp from "./Pages/Workexp/Workexp";
import Layout from "./component/Layout/Layout";
import Mobilenav from "./component/MobileNav/Mobilenav";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
        <Mobilenav/>
        <Layout/>
      <div className="container">
      <About/>
      <Education/> 
      <Tech/>
      <Project/>
      <Workexp/>
      <Contact/>
      </div>
      <div className="footer mb-3 ms-3">
        <h4 className="text-center">Made by 😍 SM  </h4>
    </div>
    <ScrollToTop 
    smooth 
    color="#f29f67"
    style={{backgroundColor:"#1e1e2c" , borderRadius:"80px"}}/>
    </>
  )
}

export default App;
