import React, { useState ,useEffect} from 'react';
//import item_options from "./items.json";
import Select from 'react-select';
import ICard from './ICard'


const InfoModel = () => {
const [elementType , setElementType] = useState("");
const [elementOptions , setElementOption] = useState([]);
useEffect(() => {
  fetch("https://my-json-server.typicode.com/dnyanesh-furniture/quotation/Elements", {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then((result) => result.json())
    .then(data => {
      setElementOption(data)
      
    }).catch(error => {
        throw new Error(error);
    })
}, []);


const checkData = (e) =>{
    setElementType(e);
}

  return (
    <>
    <div className='container'>
    <Select options={elementOptions} onChange = {(e)=>checkData(e)}/>
    <ICard props={elementType}/>
    </div>     

      
    </>
  );
}

export default InfoModel;