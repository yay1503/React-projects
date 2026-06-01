import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import {login as authLogin} from "../Store/AuthSlice"
import {Button,Input,Logo} from "./Index"
import {useDispatch} from "react-redux"
import authService from "../appwrite/Auth";
import {useForm} from "react-hook-form"

function Login(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error,setError] = useState("")

    const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if(session)
            {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData))
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
            
        }
    }

    return (
        <div className="">

        </div>
    )
}

export default Login