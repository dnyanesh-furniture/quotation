import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import EditIcon from '@mui/icons-material/Edit';

const QuoteBox = (props) => {
    let arr = props.props;
    return <div className="quotebox mt-4 ms-1 me-1 mb-1">
    {arr.map((e)=>{ return <div className="card">
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
}

export default QuoteBox;