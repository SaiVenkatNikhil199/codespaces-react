import '../styles/blogcontent.css'
import { useState } from 'react'
import {addBlog} from '../blogsstorage.js'
import axios from 'axios'
import RichTextEditor from './RichTextEditor'
function WriteABlog(){
    let [title,setTitle] = useState('')
    let [content,setContent] = useState('')
    if(content != '') {
        document.getElementById('titleDiv').style.transform = 'translateY(30px)'
    }
    return(
        <>
            <div className="blogpost">
                <div id='titleDiv'>
                    <input onChange={(e) => {
                        setTitle(e.target.value)
                    }} type="text"></input>
                </div>

                <RichTextEditor state={{content,setContent}} />

                <button onClick={
                    // () => addBlog(title,content)
                    async () => {
                        // console.log("hello")
                        await axios.post('https://cuddly-spoon-jj5jvxgjw5rvc5q79-8000.app.github.dev/create_blog', {
                            title,
                            content
                        }).then((response) => {
                            console.log(response.data)
                            console.log("Blog created successfully")
                        }).catch((error) => {
                            console.log(error.response.data)
                            console.log("Error")
                        })
                        setTitle('')
                        setContent('')
                    }

                }>Create</button>
            </div>

        </>
    )
}

export default WriteABlog