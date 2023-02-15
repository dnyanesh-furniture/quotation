
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';



const CustomerInfo = () =>{
    const[cms , setCms] = useState(0);
    const[withCMS , setWithCms] = useState(0);
    let data = localStorage.getItem("Quotes");
    let quoteItems = JSON.parse(data);
    let gross = 0;
    quoteItems.map((z)=>{
     let n = Number(z.total);
      gross += n;
      return 0;
    });
   
    function setPercentage(e){
         let pc = gross * e.target.value / 100;
        setCms(pc);
        setWithCms(gross + pc)
        
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
                    <div><em><span>Majoori</span ></em>
                    
                    <div className="col mt-2">
                    &#8377; {gross} x <input type='number' className='percentage' placeholder='0' onChange={(e)=>setPercentage(e)}/> % = &#8377; {cms}
                    
                    </div>
                   
                    <div className='mt-2'>
                    <span className="totalCss">&#8377; {gross} + &#8377; {cms} = <span className='grossTotal'>&#8377; {withCMS} </span></span> 
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div className='custInfo'>

    </div>
    </div>
    </div>
}
export default CustomerInfo;