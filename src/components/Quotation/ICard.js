import React from "react";
import Plywood from "./Elements/Plywood";



const ICard = (props) =>{
  switch(props.props){
    case 0 : return <Plywood/>;
    case 1 : return "Hi";
    default : return "";
  }
}

export default ICard;