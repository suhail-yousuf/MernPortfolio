import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Education from "./Pages/Education/Education";
import Project from "./Pages/Project/Project";
import Tech from "./Pages/Tech/Tech";
import Workexp from "./Pages/Workexp/Workexp";
import Layout from "./component/Layout/Layout";

function App() {
  return (
    <>
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
        <h4 className="text-center">Made With 😍 SM  </h4>
    </div>
    </>
  )
}

export default App;
