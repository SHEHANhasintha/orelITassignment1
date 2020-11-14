
//function to store the data and access variable
export const REQUEST_API_DATA = "REQUEST_API_DATA";

//data storage a storage variable
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";

//the actual function
export const requestApiData = () => ({ type: REQUEST_API_DATA })

//the actual data storage
export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data })



//function to store the data and access variable
export const REQUEST_LOCATION_DATA = "REQUEST_LOCATION_DATA";

//data storage a storage variable
export const RECEIVE_LOCATION_DATA = "RECEIVE_LOCATION_DATA";

//receive location data //we dont need this function
export const locationData = () => ({ type: REQUEST_LOCATION_DATA})

//data locations only
export const receiveLocationData = data => ({ type: RECEIVE_LOCATION_DATA, data })
