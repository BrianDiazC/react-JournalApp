import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/auth";
import { FirebaseAuth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

export const useCheckAuth = () => {
      const { status} = useSelector((state) => state.auth);
      const dispatch = useDispatch();
      
      
      
      useEffect(() => {
       
        //regresa un observable, que esta viendo si el estado de la authenticacion cambia
        onAuthStateChanged(FirebaseAuth, async(user)=>{
          if(!user)return(dispatch(logout()));
      
          const {displayName, email, uid, photoURL} =  user;
          dispatch(login({displayName, email, uid, photoURL}))
        });
      
      }, [status])
   
      return {
        status
      }
  }
  