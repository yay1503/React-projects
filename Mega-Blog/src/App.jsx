import React,{ useState } from 'react'
import {useDispatch} from "react-redux";
import authservice from "./appwrite/auth";
import { login, logout } from './Store/AuthSlice';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authservice.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout)
      }
    })
    .finally(() => setLoading(false))
  },[])
  
  return !loading ? (
    <div className=''></div>
  ): null
}

export default App
