import {fetchData} from "./actionType";
import axios from "axios";

export const dataFetching = () => (dispatch)=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>dispatch(fetchDatafunction(res.data)))
        .catch((err)=>console.log(err))
      }
export const fetchDatafunction = (payload) =>{
    
    return {type:fetchData , payload}

}