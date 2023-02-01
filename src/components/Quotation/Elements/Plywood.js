import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.css';
//import item_options from "../items.json";
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

const Plywood = () => {
    const [total , setTotal] = useState(0);
    const [plyType , setPlyType] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/dnyanesh-furniture/quotation/Plywood", {
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              }
          })
          .then((result) => result.json())
          .then(data => {
            setPlyType(data)
            
          }).catch(error => {
              throw new Error(error);
          })
      }, []);
      
      
    

    function Calc(e){
       let rate =  document.getElementById("rate").value;
       if(rate >= 0) setTotal(((e.target.value*rate).toFixed(2)));
      
    }
    function saveData(){
        let size = document.getElementsByClassName("css-1dimb5e-singleValue")[2].innerHTML;
        let details = {
            "item" : "प्लायवुड",
            "size" : size,
            "total" : total
        }

        fetch("https://my-json-server.typicode.com/dnyanesh-furniture/quotation/QuotationList",
         {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify(details)
        })
        .then((result) => result.json())
        .then(data => {
          console.log("success", data);
          sessionStorage.setItem("itemFlag" , "true");
          console.log(sessionStorage.getItem("itemFlag") , "SS");
        }).catch(error => {
            throw new Error(error);
        });
        //window.location.reload();
        
        /* fetch("http://localhost:3001/SelectedItem", {
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
            }
        })
        .then((result) => result.json())
        .then(data => {
        console.log("data" , data[0].SelectedItem); 
        document.getElementsByClassName("css-1jqq78o-placeholder")[0].innerHTML = data[0].SelectedItem;
        }).catch(error => {
            throw new Error(error);
        }); */


    }


   return <div className='plywood'>
        <div className='row'>
            <div className='col'>
            <Select options={plyType} id="plySelector"/>
            </div>
            <div className='col'>
            <input type="number" placeholder='Rate per piece' id='rate'/>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
            <input type="number" placeholder='Piece' id='pieces' onChange={(e)=>Calc(e)}/>
            </div>
            <div className='col'>
            <span className='me-2'>&#8377;</span><span id='total' >{total}</span>
            </div>
        </div>
         <div id='submitBtn'>
         <Button variant="success" className='submit-btn' onClick={()=>saveData()}>&#x2713;</Button>
         </div> 
   </div>
}
export default Plywood;