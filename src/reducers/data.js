import { RECEIVE_API_DATA } from '../actions';

export default (state = {}, { type, data }) => {
    switch(type){
        case RECEIVE_API_DATA:
            console.log("not better")
            return data;
        default:
            return state;
    }
};