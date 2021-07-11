import React, {useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import { removeJob } from "../actions/addFavsAction";
import {Form, Button, Modal, Col} from 'react-bootstrap'
import './style.css'


const FavItems = () => {

    const favItems = useSelector(state => state.jobs.favorites);
    const numberOfItems = useSelector(state => state.jobs.numberOfItems);
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
       
    

  return <>
    <div>
        {numberOfItems === 0 
            ?
            <div>You have no jobs saved</div>
            : 
            <div >
                <i>You have <em>{numberOfItems}</em> jobs saved below:</i>
            </div>
            
        }
    </div>
    <br></br>

        <Bounce left cascade>
        <div className="row cart-items sticky-top" >
        
            {favItems.map(item =>{
                return <div key={item.id} className="col-12 bg-light d-flex flex-column mb-4 product card border-5 shadow">

                    <div className="d-flex">
                   
                            <div>
                                <b>{item.title}</b> <br></br>at <i>{item.company_name}</i>
                            </div>
                    </div>

                    <div className="mb-3 mt-3">
                    <Button variant="dark" onClick={()=>handleShow(item.id)}>
                                            More Details
                                    </Button>
                    <button 
                        onClick={()=> dispatch(removeJob(item.id))}
                        className="btn btn-danger ml-3 border-dark">Remove</button>



                        <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title><b><h2>{item.title}</h2></b> at {item.company_name}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body dangerouslySetInnerHTML={{ __html: item.description }}></Modal.Body>
                                <Modal.Footer>
                                <Button href={item.url} target="_blank" rel="noopener noreferrer" variant="info" >
                                    Apply                                    
                                </Button>
                                <Button variant="danger" onClick={handleClose}>
                                    Close
                                </Button>
                                </Modal.Footer>
                        </Modal>

                        

                   
                    </div>
                </div>
            })}
        </div>
        </Bounce>
  </>;
};

export default FavItems;