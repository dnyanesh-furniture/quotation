import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./quotation.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InfoModel from "./InfoModel";



function MyVerticallyCenteredModal(props) {
    return (
      <Modal {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          माहिती भरा
          </Modal.Title>
        </Modal.Header> */}
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


return <div className="addComp" id="addComp">
     <Button variant="primary" onClick={() => setModalShow(true)}>
       +
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
   <Button variant="success">{'>'}</Button>
   
</div>
}
export default NewComponent;