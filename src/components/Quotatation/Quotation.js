import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./quotation.css"
import item_options from "./items.json";
import Select from 'react-select';
import AddComponent from "./NewComponent";



const Quotation = () => {

const FurnitureList = () => (
  <Select options={item_options.Items} onChange={()=>getData()}/>
);

function getData(){
document.getElementById("addComp").style.visibility = "visible";

}
return <div>
    <h1 className="page-title">ज्ञानेश फर्निचर</h1>
    <FurnitureList />
    <AddComponent />
    </div>
}

export default Quotation;