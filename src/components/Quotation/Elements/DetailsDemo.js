import DFlogo from  '../Images/DFLogo.jpg'
import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive
// from our API call
//import { format } from "date-fns";
import React from "react";
import ReactToPdf from 'react-to-pdf';

//import { Base64 } from 'js-base64';

const Details = () =>{
   
    const ref = React.createRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [10,5]
    };

    let Cdata = JSON.parse(localStorage.getItem('CustData'));
    let name = Cdata['name'] ;
    let number = Cdata['contact'];

    let tickets = JSON.parse(localStorage.getItem('Quotes'));
    console.log(tickets);
    

    const generatePDF = tickets => {
        // initialize jsPDF
        const doc = new jsPDF();
    
    // var imgData = 'data:image/jpg;base64,'+ Base64.encode(DFlogo);
    // console.log(imgData);
    // doc.setFontSize(20);
    // doc.text(30, 20, 'Hello world!');
    // doc.addImage(imgData, 'JPG', 15, 40, 180, 160);
    // doc.output('datauri');


        // define the columns we want and their titles
        const tableColumn = ["Id", "Item", "Size", "Rate", "Pieces" , "Total"];
        // define an empty array of rows
        const tableRows = [];
      
        // for each ticket pass all its data into an array
        tickets.map((ticket , index)=>{
            const ticketData = [
                index+1,
                ticket.item,
                ticket.size,
                ticket.rate,
                ticket.pieces,
                ticket.total
                // called date-fns to format the date on the ticket
                //format(new Date(ticket.updated_at), "yyyy-MM-dd")
              ];
              // push each tickcet's info into a row
              tableRows.push(ticketData);
              return 1;
        })

      
      
        // startY is basically margin-top
        doc.autoTable(tableColumn, tableRows, { startY: 20 });
        const date = Date().split(" ");
        // we use a date string to generate our filename.
        const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
        // ticket title. and margin-top + margin-left
        doc.text("Closed tickets within the last one month.", 14, 15);
        // we define the name of our PDF file.
        doc.save(`report_${dateStr}.pdf`);
      };

    return <div className='details' ref={ref}>
            <div className='DFlogo'>
                <img src={DFlogo} alt='DFlogo'/>
            </div>
            <div >
                <h1 className='mt-2 fw-bold text-center'>कोटेशन</h1>
                <div className='CCinfo'>
                    <div className='col'>
                        <h4 className='ms-2'>नाव : {name}</h4>
                    </div>
                    <div className='col'>
                        <h4 className='ms-2 fw-light'>फोन : +91-{number}</h4>
                    </div>
                </div>
                <div className='ItemTodisp text-center'>
                        <h3 className='fw-bold'>{localStorage.getItem('ItemName')}</h3>
                </div>


                <div className='tableDisp'>
                        <div className="container">
                            {tickets.length === 0 ? (
                                "You currently have no tickets created"
                            ) : (
                                <table className="table">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Size</th>
                                    <th scope="col">Rate</th>
                                    <th scope="col">Pieces</th>
                                    <th scope="col">Total</th>
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
                                </tbody>
                                </table>
                            )}
                            </div>
                        
                </div>




            </div>
            <ReactToPdf targetRef={ref} filename="div-blue.pdf" options={options} x={.5} y={.5} scale={1}>
                {({toPdf}) => (
                    <button  className="btn btn-primary" onClick={toPdf}>Generate pdf 1</button>
                )}
            </ReactToPdf>
            <button className="btn btn-primary" onClick={() => generatePDF(tickets)} >Generate PDF </button>
        </div>
} 

export default Details;