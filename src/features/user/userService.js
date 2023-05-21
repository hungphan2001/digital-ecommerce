import axios from "axios";
import { authSlice } from "./userSlice";
import { base_url } from "../../utils/axiosConfig";
const register=async(userData)=>{
    const resonse =await axios.post(`${base_url}user/register`,userData);
    if(resonse.data){
        return resonse.data;
    }
}

const login=async(userData)=>{
    const resonse =await axios.post(`${base_url}user/login`,userData);
    if(resonse.data){
        return resonse.data;
    }
}

export const authService={
    register,
    login,
}