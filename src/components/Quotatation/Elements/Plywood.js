import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.css';
import item_options from "../items.json";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Plywood = () => {
    const [total , setTotal] = useState(0);

    function Calc(e){
       let rate =  document.getElementById("rate").value;
       if(rate >= 0) setTotal(e.target.value*rate);
      
    }
    function saveData(){
        let size = document.getElementsByClassName("css-1dimb5e-singleValue")[2].innerHTML;
        let details = {
            "item" : "plywood",
            "size" : size,
            "total" : total
        }
       let itemToPush =  sessionStorage.getItem("ItemList");
       console.log(details);
       if(itemToPush.length > 0){
        itemToPush.push(details);
       }
       sessionStorage.setItem("ItemList", details);
       
    }


   return <div className='plywood'>
        <div className='row'>
            <div className='col'>
            <Select options={item_options.Plywood} id="plySelector"/>
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