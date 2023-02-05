import React, { useState } from 'react';

import ICard from './ICard'
import Elements from '../../db.json';


const InfoModel = () => {
const [elementType , setElementType] = useState(0);

let options = Elements.Elements;

const checkData = (e) =>{
  let sel = document.getElementById('element');
  setElementType(sel.selectedIndex);
}

  return (
    <>
    <div className='container'>
    <select  id='element' onChange={(e)=>checkData(e)}>
      {
        options.map((i , index)=>{
          return <option key={'ele'+index} >{i.label}</option>
        }
        )
      }
    </select>
     <ICard props={elementType}/>
    </div>     
      

      
    </>
  );
}

export default InfoModel;