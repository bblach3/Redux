import React, {useState, Component} from "react";
import {useSelector, useDispatch} from 'react-redux'
import {addJobs} from '../actions/addJobs'
import {addToFavs} from '../actions/addFavsAction'
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed'
import FavItems from './FavItems'
import {Card, CardDeck, Nav} from 'react-bootstrap'
import './style.css'
import beach from './beach.jpg'



var sectionStyle = {
    width: "100%",
    height: "800px",
    backgroundImage: `url(${beach})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat'
  };

const Products = () => {
  
   
    const [key, setKey] = useState('') //local

    const jobsData = useSelector(state => state.jobs.data) //accessing the store (global state)
    const dispatch = useDispatch();
    
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('button is working')
        fetch(`https://remotive.io/api/remote-jobs?search=${key}`)
        .then(response => response.json())
        .then(jobData => dispatch(addJobs(jobData.jobs)))

        
    }
    
 
    return (
        <>
   <section >
     
         <div className="container">
                <div className="row mb-5 mt-5 ml-4 justify-content-start">
            <form onSubmit = {(e) => handleSubmit(e)}>
                <label> Find your dream job:
                    <input 
                    className="ml-3"
                    type = "text" 
                    name= "keyName" 
                    placeholder = "Enter search keyword" 
                    onChange = {(e) => setKey(e.target.value)} >
                </input>
                </label>
                < button type= "submit"> Search
                </button>
            </form>
                </div>
        </div>


            <div className="container">
                <div className="row ">
                    <div className="col-8">
                    <Fade left cascade>
                        <div className="row">
                            {jobsData.map(job =>{
                                return <div key={job.id} className="col-3 mb-5 ml-5 card border-5 shadow bg-light">
                                    <div className="h-100 d-flex flex-column">
                                            <p className="mt-1 mb-5 title"><br></br><h2>{job.title}</h2></p>
                                            <div className="mt-auto align-items-bottom">
                                            <p className=""><i>Company Name:</i><br></br> <h4><b>{job.company_name}</b></h4></p>
                                            <p className=" "><i>Category:</i> <br></br><b>{job.category}</b></p>
                                            </div>
                                    </div>
                                        <div className="d-flex justify-content-around">
                                            <button 
                                            className="btn btn-dark mb-3"
                                            onClick={()=> dispatch(addToFavs(job))}
                                            >Save To Favorites</button>
                                        </div>
                                   
                                </div>
                                
                            })}
                          
                        </div>
                        </Fade>
                    </div>
     
                    <div className="col-4 ml-0 sitcky-top">
                        
                        <b>Favorite Jobs:</b>

                        <FavItems />
                    </div>
                 
                </div>
            </div>
            </section> 
        </>
        )
        
};


export default Products;