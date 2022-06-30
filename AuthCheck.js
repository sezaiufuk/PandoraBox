import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

export default function AuthCheck() {
    const isLoggedIn = useSelector(state=>state.authReducer.isLoggedIn)
    const navigate = useNavigate()
    useEffect(() => {
      if(!isLoggedIn){
        navigate('/')
      }
    }, [])
    
  return (
    <></>
  )
}
