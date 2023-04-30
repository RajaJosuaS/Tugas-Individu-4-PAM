import axios from "axios";

   export const FETCH_IP_REQUEST = "FETCH_IP_REQUEST";
   export const FETCH_IP_SUCCESS = "FETCH_IP_SUCCESS";
   export const FETCH_IP_FAILURE = "FETCH_IP_FAILURE";

   export const fetchIpRequest = () => {
     return {
       type: FETCH_IP_REQUEST,
     };
   };

   export const fetchIpSuccess = (ip) => {
     return {
       type: FETCH_IP_SUCCESS,
       payload: ip,
     };
   };

   export const fetchIpFailure = (error) => {
     return {
       type: FETCH_IP_FAILURE,
       payload: error,
     };
   };

   export const fetchIp = () => {
     return (dispatch) => {
       dispatch(fetchIpRequest());
       axios
         .get("https://api.ipify.org?format=json")
         .then((response) => {
           const ip = response.data.ip;
           dispatch(fetchIpSuccess(ip));
         })
         .catch((error) => {
           const errorMessage = error.message;
           dispatch(fetchIpFailure(errorMessage));
         });
     };
   };