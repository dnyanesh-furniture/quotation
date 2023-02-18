import React from "react";
import ReactToPdf from 'react-to-pdf';
import DFlogo from  '../Images/DFLogo.jpg'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import AddIcon from '@mui/icons-material/Add';
import ReactWhatsapp from 'react-whatsapp';

const Details = () =>{
   
    const ref = React.createRef();
    let tickets = JSON.parse(localStorage.getItem('Quotes'));
    
    let options = {
        orientation: 'portrait',
        unit: 'in',
        format: [10,5]
    };
    if(tickets.length > 10){
        options = {
            orientation: 'portrait',
            unit: 'in',
            format: [tickets.length,5]
        };
    }
    

    let Cdata = JSON.parse(localStorage.getItem('CustData'));
    let name = Cdata['name'] ;
    let number = Cdata['contact'];
    let wapNo = '+91' + number;

    let filename = localStorage.getItem('ItemName') + '-' + name + ".pdf";    
    let Gross = localStorage.getItem("Gross");
    let d = new Date();
    let date = d.getDate()+'/'+d.getMonth()+'/'+d.getFullYear();
    return <>
    <div className='details' ref={ref}>
            <div className='DFlogo'>
                <img src={DFlogo} alt='DFlogo'/>
            </div>
            <div >
                <h1 className='mt-3 fw-bold text-center'>कोटेशन</h1>
                <div className='CCinfo'>
                    <div className='col'>
                        <h5 className='ms-4'>नाव : {name}</h5>
                    </div>
                    <div className='col'>
                        <span className='ms-4 fw-light'>फोन : +91-{number}</span>
                        <span className="float-end me-4">तारीख : {date}</span>
                    </div>
                </div>
                <div className='ItemTodisp text-center'>
                        <h3 className='mt-3 fw-bold'>{localStorage.getItem('ItemName')}</h3>
                </div>


                <div className='tableDisp'>
                        <div className="container">
                            {tickets.length === 0 ? (
                                "You currently have no quotes created"
                            ) : (
                                <table className="table">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">साहित्य</th>
                                    <th scope="col"> </th>
                                    <th scope="col">दर</th>
                                    <th scope="col">नग</th>
                                    <th scope="col">एकूण</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tickets.map((ticket,index) => (
                                    <tr key={index+1}>
                                        <td>{index+1}</td>
                                        <td>{ticket.item}</td>
                                        <td>{ticket.size}</td>
                                        <td>{ticket.rate}</td>
                                        <td>{ticket.pieces}</td>
                                        <td>{ticket.total}</td>
                                    </tr>
                                    ))}
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        
                                       
                                        <td><b>एकूण</b></td>
                                        <td><b>&#8377; </b></td>
                                        <td><b>{Number(Gross).toFixed(2)}</b></td>
                                        
                                    </tr>
                                </tbody>
                                </table>
                            )}
                            </div>
                            
                        
                </div>




            </div>
           <p className="ms-4"><span>प्रोप्रा . विजय सुतार </span><span className="float-end me-4">+91-9921547327</span></p>
           <p className="text-center">&#169;dnyanesh-furniture-tembhurni</p>
        </div>
         <ReactToPdf targetRef={ref} filename={filename} options={options} x={0.3} y={0.3} >
                {({toPdf}) => (
                     <button  className="btn btn-success PdfGenerator" onClick={toPdf}><ReactWhatsapp number={wapNo} message="नमस्कार 🙏🙏 ,ज्ञानेश फर्निचर कडून कोटेशन " className="wapbtn"><DownloadForOfflineOutlinedIcon/> <AddIcon/> <WhatsAppIcon/></ReactWhatsapp></button>
                )}
            </ReactToPdf>
        </>
} 

export default Details;