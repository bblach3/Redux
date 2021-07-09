import {ADD_JOBS} from '../actions/types';
import {ADD_TO_FAVS} from '../actions/types';
import {REMOVE_FROM_FAVS} from '../actions/types';

const jobsReducer = (state, action) => {
    
    if(state == null){
        state = {
            data: [],
            favorites: [],
            cartItems: [],
            numberOfItems: 0,
        }
    }

    switch(action.type){

        case ADD_JOBS:
            return {
                ...state, 
                data: action.jobs
            }



        case ADD_TO_FAVS:
            let newCartItems = [...state.favorites];
 
    
            //newCartItems.push({...action.jobs})
            const {id} = action.jobs
            const alreadyExists = newCartItems.find(job => {
                return job.id === id;
            })
            if(alreadyExists){
                //pass
            }
            else {
                newCartItems.push({...action.jobs})
            }

            return {
                ...state, 
                favorites: newCartItems,
                numberOfItems: state.numberOfItems + 1
                
            }




        case REMOVE_FROM_FAVS:
            let oldCartItems = [...state.favorites];
            const newCart = oldCartItems.filter(job => job.id !== action.id);
     

        return {
            ...state,
            favorites: newCart,
            numberOfItems: state.numberOfItems - 1,
            
        }


        default:
            return state;
    }
}

export default jobsReducer;