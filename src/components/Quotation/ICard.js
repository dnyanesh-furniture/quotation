import React from "react";
import Plywood from "./Elements/Plywood";



const ICard = (props) =>{
  switch(props.props.value){
    case "plywood" : return <Plywood/>;
    case "ply-bound" : return "Hi";
    default : return "";
  }
}

export default ICard;