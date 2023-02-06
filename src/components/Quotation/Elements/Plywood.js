import 'bootstrap/dist/css/bootstrap.css';
import { useState , useContext } from 'react';
import Button from 'react-bootstrap/Button';
import PlyItems from '../../../db.json';
import FurnitureContext from '../FurnitureContext';

var options = PlyItems.Plywood;

const Plywood = () => {

    const [total , setTotal] = useState(0);
    
    const {quoteItems , setQuoteItems} = useContext(FurnitureContext);

    function Calc(e){
       let rate =  document.getElementById("rate").value;
       if(rate >= 0) setTotal(((e.target.value*rate).toFixed(2)));
    }


    function saveData(){
        var itemToadd = {};
        var NewQuote=[] ;
        let size  = document.getElementById('plywood').value;
       itemToadd = {
        'item' : "प्लायवुड",
        "total" : total,
        'size' : size
       }
       NewQuote = [...quoteItems ,itemToadd ];
        setQuoteItems(NewQuote);

    }

   return <div className='plywood'>
        <div className='row'>
            <div className='col'>
            
            <select id='plywood' className='font20'>
                 {
                    options.map((i , index)=>{
                    return <option key={'ply'+index} id={'plyType'+index}>{i.label}</option>
                    })
                 }
            </select>

            </div>
            <div className='col'>
            <input type="number" placeholder='Rate per piece' id='rate' className='font20'/>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
            <input type="number" placeholder='Piece' id='pieces' onChange={(e)=>Calc(e)} className='font20'/>
            </div>
            <div className='col font20'>
            <span className='me-2'>&#8377;</span><span id='total' >{total}</span>
            </div>
        </div>
         <div id='submitBtn'>
         <Button variant="success" className='submit-btn font20' onClick={()=>saveData()}>&#x2713;</Button>
         </div> 
   </div>
}
export default Plywood;