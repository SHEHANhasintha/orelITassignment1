import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA, receiveApiData, LOCATION_DATA, receiveLocationData } from "./actions";
import axios from '../node_modules/axios'

/*const getFetched = function* getFetched(){


    try{
        const data = yield call
    }





    return(new Promise(async(resolve,reject) => {
      axios.get('https://restcountries.eu/rest/v2/all')
      .then((res) => {
        console.lpg(res)
        resolve(res.data)
      })
      .catch((err) => {
        console.log('no responce fetched')
        reject(false)
      })
  
    }))
  
  }*/


  const getFetched = async () => {
    try {
      const response = await fetch("https://restcountries.eu/rest/v2/all");
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };



const getAndStoreData = function* getApiData(){
    try{
        const data = yield call(getFetched);
        console.log(data)

        const loc = yield data.map((locations) => {
            return locations.name
        })

        //yield put({ type: "NEWS_RECEIVED", json: json.articles || [{ error: json.message }] });


        yield put(receiveLocationData(loc))

        yield put({ type: "NEWS_RECEIVED"})

        yield put(receiveApiData(data))
        
        
        //yield put({ type: "RECEIVE_LOCATION_DATA", json: loc })
    } catch(err) {
        console.log(err)
    } 
};

const fetchSaga = function* fetchSaga() {
    yield takeEvery(REQUEST_API_DATA, getAndStoreData);
}


export default fetchSaga