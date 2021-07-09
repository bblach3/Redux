import {ADD_TO_FAVS} from './types';
import {REMOVE_FROM_FAVS} from './types';

export const addToFavs = (item) => {
    console.log(item)
    return {
        type: ADD_TO_FAVS,
        jobs: item
    }
};

export const removeJob = (id) => {
    
    return {
        type: REMOVE_FROM_FAVS,
        id: id
    }
};