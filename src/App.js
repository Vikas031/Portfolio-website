import "./index.css";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Checkcv from "./components/Checkcv";
import Header from "./components/Header";
function App() {

  return (
    <>
    <div>
        <Header/>
        <Home ></Home>
        <Education ></Education>
        <Skills></Skills> 
        <Projects></Projects>
        <Checkcv></Checkcv>
         <Contact></Contact>
         
        <br />
         <footer className="footer" style={{position:"absolute",backgroundColor:"black" ,color:"white" ,width:"100%", padding:".7%",fontSize:"1.4rem",textAlign:"center"}} >
           Thanks for visiting !!!
           </footer>
           </div> 
    </>
  );
}

export default App;
 