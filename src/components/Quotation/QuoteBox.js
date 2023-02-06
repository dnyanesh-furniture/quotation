import React, {useContext} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import NewComponent from "./NewComponent";
import FurnitureContext from "./FurnitureContext";

const QuoteBox = (props) => {
    const {quoteItems , setQuoteItems} = useContext(FurnitureContext);

    let arr = props.props;

    function editCard(){
        console.log('edit');
    }
    function deleteCard(indx){
        var result = quoteItems.filter((data, idx) => idx !== indx );
        setQuoteItems(result)
    }

    return <div className="quotebox">
    <div className="quotebox mt-4 ms-1 me-1 mb-1">
    {arr.map((e ,index)=>{ return <div className="card" key={'quote'+index} >
            <div className="card-body font20">
                <div className="row">
                    <div className="col-7">
                        {e.item} {e.size}
                    </div>
                    <div className="col-3">
                        {e.total}
                    </div>
                    <div className="col-2 cardIcons">
                      <span onClick={()=>editCard()}><EditIcon/></span> <span className="delete" onClick={()=>deleteCard(index)}><DeleteIcon/></span>
                    </div>
                </div>
            </div>
        </div>

    })}

    </div>
    <NewComponent />
    </div>
}

export default QuoteBox;