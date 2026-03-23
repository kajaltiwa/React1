import React from "react";

import "../assets/Css/component.css"
import mystyle from "../assets/Css/component.module.css"
export default function CssExample(){
    return(
        <>
          <div className="main">
            <div className="center">
                <h1>CSS Example</h1>
                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam exercitationem facilis eligendi, doloribus harum, delectus sint tempora, iste fuga quasi soluta et in nobis rem placeat est repellat vitae nostrum?</h2>
                <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, temporibus soluta quam asperiores nobis architecto recusandae vitae, voluptate laborum dolore modi nostrum saepe ratione quae. Ducimus debitis, aliquam, eaque dolore labore veniam eius omnis ex fugiat cupiditate illum neque voluptatum.</h2>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis error est fuga libero natus itaque voluptas corrupti rerum sit debitis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod id provident commodi illum ullam at, pariatur beatae reprehenderit? Delectus, libero.</p>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis error est fuga libero natus itaque voluptas corrupti rerum sit debitis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod id provident commodi illum ullam at, pariatur beatae reprehenderit? Delectus, libero</p>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis error est fuga libero natus itaque voluptas corrupti rerum sit debitis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod id provident commodi illum ullam at, pariatur beatae reprehenderit? Delectus, libero</p>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis error est fuga libero natus itaque voluptas corrupti rerum sit debitis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod id provident commodi illum ullam at, pariatur beatae reprehenderit? Delectus, libero</p>
              <p className={mystyle.test}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis error est fuga libero natus itaque voluptas corrupti rerum sit debitis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod id provident commodi illum ullam at, pariatur beatae reprehenderit? Delectus, libero</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis error est fuga libero natus itaque voluptas corrupti rerum sit debitis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod id provident commodi illum ullam at, pariatur beatae reprehenderit? Delectus, libero</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis error est fuga libero natus itaque voluptas corrupti rerum sit debitis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod id provident commodi illum ullam at, pariatur beatae reprehenderit? Delectus, libero</p>
           </div>
        </div>
        </>
    )
}


// import React from "react";

// const mystyle = {
//     heading:{
//         backgroundColor:"black",
//         color:"white",
//         textAlign:"center",
//         padding:10
//     },
//     para:{
//         backgroundColor:"green",
//         color:"white",
//         textAlign:"justify",
//         padding:10
//     },
//     magenta:{
//         backgroundColor:"magenta"
//     },
//     purple:{
//         backgroundColor:"purple"
//     }

// }
// export default function CssExample(){
//     return(
//         <>
//         <div className="main">
//             <div className="center">
//         <h1 style={{
//              backgroundColor:"red",
//              color:"white",
//              textAlign:"center"
//         }}>CSS Example</h1>
//         <h2 style={mystyle.heading}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam exercitationem facilis eligendi, doloribus harum, delectus sint tempora, iste fuga quasi soluta et in nobis rem placeat est repellat vitae nostrum?</h2>
//         <h2 style={{...mystyle.heading,...mystyle.magenta}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, temporibus soluta quam asperiores nobis architecto recusandae vitae, voluptate laborum dolore modi nostrum saepe ratione quae. Ducimus debitis, aliquam, eaque dolore labore veniam eius omnis ex fugiat cupiditate illum neque voluptatum.</h2>
//         <p style={mystyle.para}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis error est fuga libero natus itaque voluptas corrupti rerum sit debitis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod id provident commodi illum ullam at, pariatur beatae reprehenderit? Delectus, libero.</p>
//         <p style={{...mystyle.para,...mystyle.magenta}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis error est fuga libero natus itaque voluptas corrupti rerum sit debitis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod id provident commodi illum ullam at, pariatur beatae reprehenderit? Delectus, libero</p>
//         <p style={mystyle.para}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis error est fuga libero natus itaque voluptas corrupti rerum sit debitis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod id provident commodi illum ullam at, pariatur beatae reprehenderit? Delectus, libero</p>
//         <p style={{...mystyle.para,...mystyle.purple}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis error est fuga libero natus itaque voluptas corrupti rerum sit debitis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod id provident commodi illum ullam at, pariatur beatae reprehenderit? Delectus, libero</p>
//         <p style={{...mystyle.para,...mystyle.magenta}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis error est fuga libero natus itaque voluptas corrupti rerum sit debitis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod id provident commodi illum ullam at, pariatur beatae reprehenderit? Delectus, libero</p>
//         <p style={mystyle.para}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis error est fuga libero natus itaque voluptas corrupti rerum sit debitis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod id provident commodi illum ullam at, pariatur beatae reprehenderit? Delectus, libero</p>
//         <p style={{...mystyle.para,...mystyle.purple}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis error est fuga libero natus itaque voluptas corrupti rerum sit debitis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod id provident commodi illum ullam at, pariatur beatae reprehenderit? Delectus, libero</p>
//         <p style={mystyle.para}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis error est fuga libero natus itaque voluptas corrupti rerum sit debitis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod id provident commodi illum ullam at, pariatur beatae reprehenderit? Delectus, libero</p>
//         <p style={{...mystyle.para,...mystyle.magenta}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis error est fuga libero natus itaque voluptas corrupti rerum sit debitis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod id provident commodi illum ullam at, pariatur beatae reprehenderit? Delectus, libero</p>
//         <p style={mystyle.para}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis error est fuga libero natus itaque voluptas corrupti rerum sit debitis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod id provident commodi illum ullam at, pariatur beatae reprehenderit? Delectus, libero</p>
//         </div>
//         </div>
//         </>
//     )
// }