import React, { useEffect } from "react";
   import { View, Text } from "react-native";
   import { useDispatch, useSelector } from "react-redux";
   import { fetchIp } from "../actions/ipActions";

   const Ip = () => {
     const dispatch = useDispatch();
     const ipState = useSelector((state) => state.ip);
     const { loading, ip, error } = ipState;

     useEffect(() => {
       dispatch(fetchIp());
     }, [dispatch]);

     return (
       <View>
         {loading ? (
           <Text>Loading...</Text>
         ) : error ? (
           <Text>{error}</Text>
         ) : (
           <Text>IP Anda: {ip}</Text>
         )}
       </View>
     );
   };

   export default Ip;