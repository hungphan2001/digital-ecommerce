import axios from "axios";
import { authSlice } from "./userSlice";

const register=async(userData)=>{
    const resonse =await axios.post("",userData);
    if(resonse.data){
        return resonse.data;
    }
}

export const authService={
    register
}