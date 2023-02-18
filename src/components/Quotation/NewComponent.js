import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./quotation.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InfoModel from "./InfoModel";
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ModelContext from "./ModelContext";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import FurnitureContext from "./FurnitureContext";

function MyVerticallyCenteredModal(props) {
 
    return (
      <Modal {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          {/* <Modal.Title id="contained-modal-title-vcenter">
          माहिती भरा
          </Modal.Title> */}
        </Modal.Header>
        <Modal.Body>

         <InfoModel/>
         
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="danger" onClick={props.onHide} > &#x2715; </Button>
          <Button variant="success" onClick={props.onHide}>&#x2713;</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }

const NewComponent = () =>{
    const [modalShow, setModalShow] = React.useState(false);

    const {quoteItems} = useContext(FurnitureContext);

    function setLocalData (){
      localStorage.setItem("Quotes" , JSON.stringify(quoteItems));
      //window.print();
    }

return <div className="addComp" id="addComp">
     <Button variant="primary" onClick={() => setModalShow(true)}>
     <AddIcon style={{'fontSize':'29px' , 'marginLeft':'-3px' , 'marginTop':'-3px'}}/>
      </Button>
      <ModelContext.Provider value={{modalShow , setModalShow}} >
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </ModelContext.Provider>
   <Link to='/custinfo'><Button variant="success" onClick={()=>setLocalData()}><SkipNextIcon style={{'fontSize':'29px', 'marginLeft':'-3px' , 'marginTop':'-3px'}}/></Button></Link>
   
</div>
}
export default NewComponent;