import "./index.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import img from "./images/back.jpeg";
function App() {
 function ram(obj){
    console.log(obj.pageY)
 }
  return (
    <>
    <div onClick={ram}>
        <Header></Header>
        <Home></Home>
        <Education></Education>
         <Skills></Skills> 
         
        <Projects></Projects>
        
         <Contact></Contact>

        <br />
         <footer style={{position:"absolute",backgroundColor:"black" ,color:"white" ,width:"100%", padding:".7%",fontSize:"1.4rem",textAlign:"center"}} >
           Thanks for visiting !!!
           </footer>
           </div> 
    </>
  );
}

export default App;
 