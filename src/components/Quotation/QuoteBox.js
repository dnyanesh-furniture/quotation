import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import EditIcon from '@mui/icons-material/Edit';
import NewComponent from "./NewComponent";

const QuoteBox = (props) => {
    console.log(props , "arr");
    let arr = props.props;
    return <div>
    <div className="quotebox mt-4 ms-1 me-1 mb-1">
    {arr.map((e ,index)=>{ return <div className="card" key={'quote'+index}>
            <div className="card-body">
                <div className="row">
                    <div className="col-7">
                        {e.item} {e.size}
                    </div>
                    <div className="col-4">
                        {e.total}
                    </div>
                    <div className="col-1">
                       <EditIcon/>
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