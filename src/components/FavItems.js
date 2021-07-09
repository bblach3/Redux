import React, {useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import Fade from 'react-reveal/Fade';
import { removeJob } from "../actions/addFavsAction";
import {Form, Button, Modal, Col} from 'react-bootstrap'


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
            <div>
                <i>You have <em>{numberOfItems}</em> jobs saved below:</i>
            </div>
            
        }
    </div>
    <br></br>

        <Fade left cascade>
        <div className="row cart-items" >
        
            {favItems.map(item =>{
                return <div key={item.id} className="col-12 d-flex flex-column mb-2 product card border-5 cardshadow">

                    <div className="d-flex">
                   
                            <div>
                                <b>{item.title}</b> <br></br>at <i>{item.company_name}</i>
                            </div>
                    </div>

                    <div className="">
                    <Button variant="info" onClick={()=>handleShow(item.id)}>
                                            More Details
                                    </Button>
                    <button 
                        onClick={()=> dispatch(removeJob(item.id))}
                        className="btn btn-dark border-dark">Remove</button>



                        <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title><b><h2>{item.title}</h2></b> at {item.company_name}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body dangerouslySetInnerHTML={{ __html: item.description }}></Modal.Body>
                                <Modal.Footer>
                                <Button variant="danger" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button href={item.url} target="_blank" rel="noopener noreferrer" variant="info" >
                                    Apply                                    
                                </Button>
                                
                                </Modal.Footer>
                        </Modal>

                        

                   
                    </div>
                </div>
            })}
        </div>
        </Fade>
  </>;
};

export default FavItems;