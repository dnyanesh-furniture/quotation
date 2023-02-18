import React from "react";

import ReactWhatsapp from 'react-whatsapp';

import { useRef } from 'react';
import jsPDF from 'jspdf';
import ReportTemplate from './ReportTemplate';


const Whatsapp = () =>{
    const reportTemplateRef = useRef(null);

	const handleGeneratePdf = () => {
		const doc = new jsPDF({
			format: 'a4',
			unit: 'px',
		});

		// Adding the fonts.
		//doc.setFont(marathi, 'normal');

		doc.html(reportTemplateRef.current, {
			async callback(doc) {
				await doc.save('कोटेशन');
			},
		});
	};


    return <>
    <ReactWhatsapp number="+91-888-846-6722" message="Hello World!!!" />
    
    <div>
			<button className="button" onClick={handleGeneratePdf}>
				Generate PDF
			</button>
			<div ref={reportTemplateRef}>
				<ReportTemplate />
			</div>
		</div>


    </>
}
export default Whatsapp;