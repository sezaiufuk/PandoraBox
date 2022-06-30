import React, { useEffect, useRef, useState } from 'react'
import '../assets/css/components/loginPage/loginPage.css'
import { Link,useNavigate } from 'react-router-dom'
import { debounceTime, fromEvent, map } from 'rxjs'
import { useDispatch } from 'react-redux'
import * as ACTIONS from '../redux/actions'

export default function LoginPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const loginButton = useRef()
    const [emptyBorderColorUserName, setEmptyBorderColorUserName] = useState()
    const [emptyBorderColorPassword, setEmptyBorderColorPassword] = useState()

    const warn = (cause) => {
            if(cause=="username"){
                setEmptyBorderColorUserName(`1px solid #008cff`)
            }
            else if(cause =="password"){
                setEmptyBorderColorPassword("1px solid #008cff")
            }
    }
    useEffect(() => {
      fromEvent(loginButton.current,'click').pipe(
          debounceTime(350),
          map(()=>{
              const username = document.querySelector('#loginFormUsername').value
              const password = document.querySelector('#loginFormPassword').value
                if(!username){
                    warn("username")
                }

                if(!password){
                    warn("password")
                }

                if(username==="ufuk" && password==="123"){
                    dispatch({type:ACTIONS.LOGGED_IN,payload:username})
                }
          })
      ).subscribe()
    }, [])

    const handleInputChange = (e,cause) =>{
        if([...e.target.value].length === 0){
            e.target.style.border = "1px solid #008cff"
            return
        }
        e.target.style.border = "1px solid transparent"
    }
  return (
    <div id='loginContainer' className='flex centeredItems'>
        <h2 className='logo'>
            <Link to='/'>
                <span>Pandora</span>
                <span>Box</span>
            </Link>
        </h2>
        <div id='loginFormWrapper'>
            <form id="loginForm" className='flex centeredItems'>
                <input type="text" placeholder="Username:" id='loginFormUsername' style={{border:emptyBorderColorUserName}} onChange={(e)=>handleInputChange(e)}/>
                <input type="password" placeholder="Password:" id='loginFormPassword' style={{border:emptyBorderColorPassword}} onChange={(e)=>handleInputChange(e)}/>
                <input className="btn btn-primary" type="button" value="Login" ref={loginButton}/>
                <Link to='/' className='createAnAccountButton'><p>Create an account</p></Link>
                <span className='flex centeredItems' id='testUserHint'>
                    <span>username: ufuk</span><br/>
                    <span>password: 123</span>
                </span>
            </form>
        </div>
    </div>
  )
}
