import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./quotation.css"
import QuoteBox from "./QuoteBox";
import Select from 'react-select';
import NewComponent from "./NewComponent";




const Quotation = () => {
  const [itemOptions , setItemOptions] = useState([]);
  const [quoteItems , setQuoteItems] = useState([]);
  const [itemFlag , setItemFlag] = useState(false);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/dnyanesh-furniture/quotation/QuotationList", {
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
      })
      .then((result) => result.json())
      .then(data => {
        setQuoteItems(data)
      }).catch(error => {
          throw new Error(error);
      });

  },[]);

useEffect(()=>{
  fetch("https://my-json-server.typicode.com/dnyanesh-furniture/quotation/Items", {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})
.then((result) => result.json())
.then(data => {
  setItemOptions(data)
  
}).catch(error => {
    throw new Error(error);
});
},[])
 /*  
setInterval(() => {
  let val = sessionStorage.getItem("itemFlag");
  console.log(val);
  if(val){
    fetch("http://localhost:3001/QuotationList", {
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
      })
      .then((result) => result.json())
      .then(data => {
        sessionStorage.setItem("itemFlag" , "false")
        setQuoteItems(data);
      }).catch(error => {
          throw new Error(error);
      });

  }
}, 10000);
 */
const FurnitureList = () => {
    return <>
    <Select options={itemOptions} onChange={(e)=>getData(e)} id="furnitureList"/>
    </>
 
};

function getData(e){

  let item = e.label;
  if( item !== undefined){
  let selected = {
    "SelectedItem" : item,
    "value" : e.value
  }
  
  fetch("https://my-json-server.typicode.com/dnyanesh-furniture/quotation/SelectedItem/1",
  {
     method:"PUT",
     headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
     },
     body:JSON.stringify(selected)
  })
  .then((result) => result.json())
  .then(data => {
    //setItemFlag(true);
  }).catch(error => {
     throw new Error(error);
  });
  
  }


}
return <div>
    <h1 className="page-title">ज्ञानेश फर्निचर</h1>
    <FurnitureList />
    <QuoteBox props={quoteItems} />
    <NewComponent />
    </div>
}

export default Quotation;