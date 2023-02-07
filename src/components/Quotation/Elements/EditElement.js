import 'bootstrap/dist/css/bootstrap.css';
import { useState , useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ElementItems from '../../../db.json';
import FurnitureContext from '../FurnitureContext';
import ModelContext from '../ModelContext';

import {ToastContainer , toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



var options ;

const EditElement = (props) => {

    const [total , setTotal] = useState(0);
    
    const {quoteItems , setQuoteItems} = useContext(FurnitureContext);
    const {setModalShow} = useContext(ModelContext);


    switch(props.props){
        case 0 : options = ElementItems.Plywood; break;
        case 1 : options = ElementItems.PlyBound ; break;
        case 2 : options = ElementItems.SunMica ; break;
        case 3 : options = [] ; break;
        default : return "";
      }


    function Calc(e){
       let rate =  document.getElementById("rate").value;
       let pieces = document.getElementById("pieces").value;
       if(rate.length > 0 && pieces.length > 0){
        document.getElementById('submitPly').disabled = false;
        setTotal(((pieces*rate).toFixed(2)));
       }
       else {
        document.getElementById('submitPly').disabled = true;
       }
       
    }


    function saveData(){
        var itemToadd = {};
        var NewQuote=[] ;
        let size = document.getElementById('elementSelect').value;
        let pieces = document.getElementById("pieces").value;
        let rate =  document.getElementById("rate").value;
        if(document.getElementById('elementSelect').value === ''){
            size  = '';
        }else{
            size  = document.getElementById('elementSelect').value ;
        }
        

        let item = document.getElementById('element').value;
       itemToadd = {
        'item' : item,
        "total" : total,
        'size' : size,
        'pieces' : pieces,
        'rate' : rate
       }
       NewQuote = [...quoteItems ,itemToadd ];
       if(total > 0) {
        setQuoteItems(NewQuote);
        setModalShow(false);
       }else{
        toast.error("संपूर्ण माहिती भरा")
       }
        

    }
   return <div className='EditElement'>
        <div className='row'>
            <div className='col elesubtype'>
            
            <select id='elementSelect' className='font20'>
                 { options.length > 0 ? 
                    options.map((i , index)=>{
                    return <option key={'ele'+index} id={'eleType'+index}>{i.label}</option>
                    })
                    : ''
                 }
            </select>
           
            </div>
            <div className='col'>
            <input type="number" placeholder='Rate per piece' id='rate' className='font20' onChange={(e)=>Calc(e)}/>
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
         <Button variant="success" id='submitPly' className='submit-btn font20' onClick={()=>saveData()} >&#x2713;</Button>
         </div> 
         <ToastContainer />
   </div>
}
export default EditElement;