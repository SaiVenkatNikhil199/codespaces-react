import { useParams } from "react-router-dom"
import { getBlogs } from "../blogsstorage"
import {useState,useEffect} from 'react'
import axios from 'axios'
import '../styles/blog.css'
function Blog() {
    // let blogs = getBlogs()

    let [blogs,setBlogs] = useState([])
    let {title} = useParams()
    useEffect(() => {
        axios.get(`https://cuddly-spoon-jj5jvxgjw5rvc5q79-8000.app.github.dev/get_blog/${title}`)
        .then(response => {
            // console.log(response.data)
            setBlogs(response.data)
        }).catch(error => { 
            console.log(error.response.data)
        })
    },[title])
    // console.log(title)
    // console.log(blogs)
    // let blog_title = blogs.find(blog => blog.title == title)
    if(title=== null) {
        return <h1>Blog not found</h1>
    }

    // console.log(blog_title)
    return (
        <>
            <div>
                <h1>{blogs.title}</h1>
                <p>{blogs.content}</p>
            </div>
        </>
    )
}

export default Blog