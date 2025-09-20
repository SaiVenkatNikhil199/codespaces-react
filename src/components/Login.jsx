import axios from 'axios'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom' 
import { Link, useOutletContext } from 'react-router-dom'
function Login(){
    
    let {isUserLoggedIn, setIsUserLoggedIn} = useOutletContext()
    let navigate = useNavigate()
    let [username,setUsername] = useState('')
    let [password,setPassword] = useState('')
    let handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://cuddly-spoon-jj5jvxgjw5rvc5q79-8000.app.github.dev/login",{
            username,
            password
        }).then(response => {
            console.log(response.data)
            console.log("Logged in successfully")
            setIsUserLoggedIn(true)
            navigate('/')
        }).catch(err => console.log("ERROR:", err.response?.status, err.response?.data || err.message))
    }
    return (
        <>
            <h1>Login In Here</h1>

            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input onChange={(e) => {
                    setUsername(e.target.value)
                }} type="text" name="username" placeholder="Enter Username"></input>
                <br></br>
                <br></br>
                <label>Password:</label>
                <input onChange={(e) => {
                    setPassword(e.target.value)
                }} type="password" name="password" placeholder="Enter Password"></input>
                <br></br>
                <br></br>
                <button type='submit'>Login</button>

                {!isUserLoggedIn || <button>
                        <Link to="/register">
                            create account
                        </Link>
                    </button>}
            </form>

        </>
    )
}

export default Login