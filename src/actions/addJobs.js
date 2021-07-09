import {ADD_JOBS} from './types';



export const addJobs = (jobData) => {

  return {
    type: ADD_JOBS,
    jobs: jobData
  }
};

