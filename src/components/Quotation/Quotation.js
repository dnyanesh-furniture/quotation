import React, { useState ,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import data from '../../db.json'
import "./quotation.css"
import QuoteBox from "./QuoteBox";
import EditIcon from '@mui/icons-material/Edit';

import FurnitureContext from "./FurnitureContext";

const Quotation = () => { 
  const [quoteItems , setQuoteItems] = useState([]);
  const [itemFlag , setItemFlag] = useState(true);
  const [GrsTotal , setGrsTotal] = useState(0)
  useEffect(() => {
    localStorage.setItem("ItemName" , 'फर्निचर');
  }, []);

  useEffect(() => {
    let gross = 0;
    quoteItems.map((z)=>{
     let n = Number(z.total);
      gross += n;
      return 0;
    });
    setGrsTotal(gross);
  }, [quoteItems])
  

  const  FurnitureList = () => {
  var options = data.Items;
    return <>{ itemFlag ?
    <select onChange={(e)=>getData(e)} id='furniture'>
    <option>फर्निचर निवडा</option>
      {
        options.map((i , index)=>{
          return <option key={index} id={index}>{i.label}</option>
        }
        )
      }
    </select> : "" }
    <div id="furnitureItem" >
    <span id="furnitureItemName">{localStorage.getItem('ItemName') || 'फर्निचर'}</span><span id="FEicon" onClick={()=>showOptions()}><EditIcon/></span>
    <span className="float-end grossTotal">&#8377; {GrsTotal}</span>
    </div>
    </>
 
};

function getData(e){
  if(quoteItems.length > 0 )  setQuoteItems([]);

  document.getElementById('furnitureItemName').innerHTML = e.target.value;
  ///document.getElementById("furniture").style.visibility =  "hidden" ;
  //document.getElementById("FEicon").style.visibility =  "visible" ;
  localStorage.setItem("ItemName" , e.target.value);
  setItemFlag(false);

}
function showOptions(){
  setItemFlag(true);
  setQuoteItems([])
}

return (
  <FurnitureContext.Provider value = {{quoteItems , setQuoteItems}}>
    <div>
    <h1 className="page-title">ज्ञानेश फर्निचर</h1>
    <FurnitureList />
    <QuoteBox props={quoteItems} />
    </div>
  </FurnitureContext.Provider>
  
) 
}

export default Quotation;