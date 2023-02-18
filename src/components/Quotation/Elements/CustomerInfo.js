
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const CustomerInfo = () =>{
    const[cms , setCms] = useState(0);
    const[withCMS , setWithCms] = useState(0);
    let data = localStorage.getItem("Quotes");
    let quoteItems = JSON.parse(data);
    let gross = 0;
    quoteItems.map((z)=>{
     let n = Number(z.total);
     if(z.item !== 'मजुरी'){
        gross += n;
     }
      
      return 0;
    });
   
    function setPercentage(e){
         let pc = gross * e.target.value / 100;
        setCms(pc);
        setWithCms(gross + pc)
        
    }
    function setLocalData (){
        let name = document.getElementById('CnameTitle').value + " " + document.getElementById('Cname').value;
        let details = {
            'name' : name,
            'contact' : document.getElementById('contact').value
        }

        localStorage.setItem("CustData" ,JSON.stringify(details));
        let commission = {
            'item' : 'मजुरी',
            'size' : '-',
            'rate' : document.getElementById('cmsRate').value + "%",
            'pieces' : '-',
            'total' : cms
        }
        if(quoteItems[quoteItems.length-1].item === 'मजुरी'){
            quoteItems.pop();
            quoteItems.push(commission);
        }
        else quoteItems.push(commission);
        
        localStorage.setItem("Quotes" ,JSON.stringify(quoteItems));
        localStorage.setItem("Gross" ,cms + gross);
        //window.print();
      }
      function goHome(){
        localStorage.clear();
      }

return <div>
    <h1 className="page-title">ज्ञानेश फर्निचर</h1>
    <div id="furnitureItem" >
    <span id="furnitureItemName">{localStorage.getItem('ItemName') || 'फर्निचर'}</span>
    <span className="float-end grossTotal">&#8377; {gross}</span>
    </div>
    <div className='cmsInfo quotebox mt-4 ms-1 me-1 mb-1'>
    <div className="card "  >
            <div className="card-body font20">
                <div className="row">
                    <div><em><span>मजुरी</span ></em>
                    
                    <div className="col mt-2">
                    &#8377; {gross} x <input type='number' className='percentage' placeholder='0' onChange={(e)=>setPercentage(e)} id='cmsRate'/> % = &#8377; {cms}
                    
                    </div>
                   
                    <div className='mt-2'>
                    <span className="totalCss">&#8377; {gross} + &#8377; {cms} = <span className='grossTotal'>&#8377; {withCMS} </span></span> 
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div className='custInfo quotebox mt-4 ms-1 me-1 mb-1'>
        <div className='card'>
            <div className="card-body font20">
                <div className='col'>
                    <div className='custName mb-2 '>
                            <select className='me-1' id='CnameTitle'>
                                <option>श्री</option>
                                <option>सौ</option>
                                <option>श्रीमती</option>
                            </select>
                            <input placeholder='नाव' className='w-100 ' id='Cname'/>
                    </div>
                   
                </div>
                <div className='col mt-2'>
                <input type='number' placeholder='फोन / व्हाट्सअँप' className='w-100' maxLength='10' id='contact'/>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div className='addComp btn'>
    <Link to='/finalquote'><Button variant="success" onClick={()=>setLocalData()}><SkipNextIcon style={{'fontSize':'29px', 'marginLeft':'-3px' , 'marginTop':'-3px'}}/></Button></Link>
    </div>
    <div className='homeBtn'>
    <Link to='/'> <Button variant='primary' onClick={()=>goHome()}><HomeIcon style={{'fontSize':'30px'}}/></Button></Link>
    </div>
    
    
    </div>
}
export default CustomerInfo;