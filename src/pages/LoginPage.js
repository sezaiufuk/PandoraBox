import React, { useEffect, useRef, useState } from 'react'
import '../assets/css/components/loginPage/loginPage.css'
import { Link } from 'react-router-dom'
import { debounceTime, fromEvent, map } from 'rxjs'
export default function LoginPage() {
    const loginButton = useRef()
    const [emptyBorderColorUserName, setEmptyBorderColorUserName] = useState()
    const [emptyBorderColorPassword, setEmptyBorderColorPassword] = useState()

    const warn = (cause) => {
            if(cause=="username"){
                setEmptyBorderColorUserName(`1px solid #ff0077`)
            }
            else if(cause =="password"){
                setEmptyBorderColorPassword("1px solid #ff0077")
            }
    }
    useEffect(() => {
      fromEvent(loginButton.current,'click').pipe(
          debounceTime(500),
          map(()=>{
              const username = document.querySelector('#loginFormUsername').value
              const password = document.querySelector('#loginFormPassword').value

                if(!username){
                    warn("username")
                }

                if(!password){
                    warn("password")
                }
          })
      ).subscribe()
    }, [])
    const handleInputChange = (e,cause) =>{
        if([...e.target.value].length === 0){
            e.target.style.border = "1px solid #ff0077"
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
            </form>
        </div>
    </div>
  )
}
