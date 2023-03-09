import React from "react";
import city from "../Assests/new.png";
import { Link } from "react-router-dom";
//import imag from "../Assests/OIP.jpeg";
export default function Home(){
  return (
    <>
    <center style={{marginTop:"20px"}}>
      <h1><b>NewsHunt</b></h1>
    </center>
  <div className="flex" style={{display:"flex", flexWrap:"wrap", margin:"30px", marginTop:"70px"}}>
    <div>
      <img src={city} style={{maxWidth:"100%", height:"auto", marginTop:"20px"}} alt="city" />
    </div>
    <div className="flex">
        <h1 style={{display:"flex",alignItems:"flex-end", fontFamily:"cursive", marginTop:"75px"}}>
            Let's enjoy reading news <br /> from all over the world!
        </h1>
        <p>
           Categories Available for every one!{" "}
        </p>
        <div class="second">
        <Link to="/general" className="btn mr-2"><i className="fas fa-link"></i> Start Reading </Link>
        </div>
    </div>
  </div>
    
    </>
  );
};


