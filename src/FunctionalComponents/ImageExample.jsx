import React from "react";

import pic from "../assets/Images/box6_image.jpg"

export default function ImageExample(){
    return(
       <>
         <h1>ImageExample</h1>
         {/* when images are in src folder */}
         <img src={require("../assets/Images/box4_image.jpg")} height ={333} width={333} alt="" />
         <img src={pic} height ={333} width={333} alt="" />
        
         {/* when imges are public folder */}
         <img src="/Images/box3_image(1).jpg" height ={333} width={333} alt="" /> 
         </>
    )
}