import React, {useState, Component} from "react";
import {useSelector, useDispatch} from 'react-redux'
import {addJobs} from '../actions/addJobs'
import {addToFavs} from '../actions/addFavsAction'
import Fade from 'react-reveal/Fade';
import FavItems from './FavItems'




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
            <form onSubmit = {(e) => handleSubmit(e)}>
                <label> Type in keyword: 
                    <input 
                    type = "text" 
                    name= "keyName" 
                    placeholder = "Enter search keyword" 
                    onChange = {(e) => setKey(e.target.value)} >
                </input>
                </label>
                < button type= "submit"> Search
                </button>
            </form>



            <div className="container">
                <div className="row ">
                    <div className="col-8">
                    <Fade bottom cascade>
                        <div className="row">
                            {jobsData.map(job =>{
                                return <div key={job.id} className="col-4 mb-5 product card border-5 cardshadow">
                                    
                                            <p className="mt-3"><b>Company Name:</b><br></br> <i>{job.company_name}</i></p>
                                            <p className="mt-3"><b>Job Title: </b><br></br><i>{job.title}</i></p>
                                            <p className="mt-3"><b>Category:</b> <br></br><i>{job.category}</i></p>
                                        
                            
                                        <div className="d-flex justify-content-around">
                                            <button 
                                            className="btn btn-warning"
                                            onClick={()=> dispatch(addToFavs(job))}

                                            >Save To Favorites</button>
                                        </div>
                            
                                </div>
                            })}
                          
                        </div>
                        </Fade>
                    </div>
                    <div className="col-4">
                <b>Favorite Jobs:</b>

                <FavItems />
                </div>
                 
                </div>
            </div>
                         
        </>
        )
        
};


export default Products;