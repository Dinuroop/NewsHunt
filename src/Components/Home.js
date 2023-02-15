import React from "react";
import city from "../Assests/new.png";
//import imag from "../Assests/OIP.jpeg";
export default function Home(){
  return (
    <>
    <center style={{marginTop:"20px"}}>
      <h1><b>NewsHunt</b></h1>
    </center>
  <div className="flex" style={{justifyItems:"center",display:"flex", flexDirection:"row", marginLeft:"100px", marginTop:"70px"}}>
    <div className="flex" style={{flexDirection:"column",marginTop:"100px"}}>
        <h1 style={{fontFamily:"cursive"}}>
            Let's enjoy reading news <br /> from all over the world!
        </h1>
        <p>
           Categories Available for every one!{" "}
        </p>
        <div class="second">
        <a href="/general" target="_blank" rel="noopener noreferrer" className="btn mr-2"><i className="fas fa-link"></i> Start Reading </a>
        </div>
    </div>
    <div style={{marginLeft:"120px"}}>
      <img src={city} alt="city" />
    </div>
  </div>
    
    </>
  );
};


