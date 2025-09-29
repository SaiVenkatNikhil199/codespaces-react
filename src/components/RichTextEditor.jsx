import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import {useState} from 'react'
function RichTextEditor({state}){
    // let [content,setContent] = useState("")
    let {content,setContent} = state
    const modules = {
        toolbar:  [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            ['link', 'image', 'video', 'formula'] ,
            [{ 'header': 1 }, { 'header': 2 }]       // toggled buttons
        ]
    }
    return(
        <>
            <ReactQuill 
            theme="snow" 
            onChange={setContent} 
            value={content}
            modules={modules}
            style={
                {
                    margin:'20px',
                    minHeight:'30px',
                    width:'90%',
                    borderRadius:'10px'
                }
            }
            placeholder="Type your content here..."
             
            />
        </>
    )
}

export default RichTextEditor
