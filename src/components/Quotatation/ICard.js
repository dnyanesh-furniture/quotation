import React from "react";
import Plywood from "./Elements/Plywood";



const ICard = (props) =>{
  switch(props.props.value){
    case "plywood" : return <Plywood/>
    default : return "";
  }
}

export default ICard;