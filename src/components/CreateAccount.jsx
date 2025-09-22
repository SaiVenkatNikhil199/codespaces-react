import axios from "axios"
import {useState} from 'react'
import { Link, useNavigate } from "react-router-dom"
function CreateAccount() {

    let [accountCreated,setAccountCreated] = useState(false)
    let [username,setUsername] = useState("")
    let [password,setPassword] = useState("")
    let navigate = useNavigate()
    let handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://cuddly-spoon-jj5jvxgjw5rvc5q79-8000.app.github.dev/add_user",{
            username,
            password
        })
        .then(response => {
            console.log("account created successfully")
            // response.data
            console.log(response.data)
            console.log(username,password)
            setAccountCreated(true)

            navigate("/login")
        }).catch(error => {
            // console.log(error.response.data)
            console.log("Enter correct details")
        })
        console.log("Account Created")
        console.log(accountCreated)
    }
    return (
        <>
            <h1>Create Account</h1>
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
                <button type="submit">Create Account</button>
            </form>
            {/* {accountCreated ? <Link to="/login">
                <button>Login Page</button>
            </Link> : null} */}
        </>
    ) 
}


export default CreateAccount