import { CREATE_JOB } from './actionTypes'
import axios from 'axios';

const ROOT_URL = 'http://localhost:8080/job';

export function createJob(job){
    const url = `${ROOT_URL}/job`;
    const request = axios.post(url,job);
    return {
      type: CREATE_JOB,
      payload: request
    };
  }