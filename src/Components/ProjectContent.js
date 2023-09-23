import React from "react";
import "./css/ProjectItem.css";

import {motion, useAnimation, useInView} from "framer-motion/dist/framer-motion"
export default function ProjectContent(props){
    let component=React.useRef(null);
    let isInView=useInView(component, { once: false });
    const control=useAnimation();
    const[current, setCurrent]=React.useState(0);
    React.useEffect(()=>{
        if(isInView){
            control.start("visible");
        }
    },[isInView])
    return (
        <motion.div 
        variants={{
            hidden: {opacity: 0, x: 100},
            visible: {opacity: 1, x: 0}
        }}
        initial="hidden"
        animate={control}
        transition={{type:"spring", duration: 2}}
        ref={component}  className="projectItem">
            
            <div style={{display: "flex", alignItems:"center", flexDirection: "row", width: "fit-content"}}>
                <h2 style={{color: "#333", opacity: 0.3, fontSize: "50px"}}>0{props.id+1}</h2>
                <h2 style={{marginLeft:"15px"}}>{props.name}</h2>
            </div>  
                <motion.img onClick={()=>{window.location.href=props.link}} whileHover={{scale: 1.05}} style={{width: "100%", borderRadius: 20, cursor: "pointer"}} src={props.src} />
                <p style={{fontSize: "1.2rem"}}><span style={{fontWeight: "600"}}>Skills:</span> {props.skill}</p>
                <p style={{fontSize: "1.2rem"}}>{props.description}</p>
        </motion.div>
    )
}