import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import item_options from "./items.json";
import Select from 'react-select';
import ICard from './ICard'


const InfoModel = () => {
const [elementType , setElementType] = useState("");
const checkData = (e) =>{
    setElementType(e);
}

  return (
    <>
    <div className='container'>
    <Select options={item_options.Elements} onChange = {(e)=>checkData(e)}/>
    <ICard props={elementType}/>
    </div>     

      
    </>
  );
}

export default InfoModel;