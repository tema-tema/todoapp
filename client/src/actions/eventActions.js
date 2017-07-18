import axios from 'axios';

export function createEvent(event) {
  return dispatch => {
    return axios.post('http://localhost:3030/api/events', event);
  };
}
