import { Link } from "react-router-dom"
import { getBlogs } from "../blogsstorage"
import '../styles/blogsstyling.css'
import axios from "axios"
import { useEffect ,useState} from "react"
function MyBlogs(){
    let [blogs,setBlogs] = useState([])
    useEffect(() => {
        axios.get("https://cuddly-spoon-jj5jvxgjw5rvc5q79-8000.app.github.dev/all_blogs")
        .then(response => {
            // console.log(response.data)
            setBlogs(response.data)
        }).catch(error => { 
            console.log(error.response.data)
        })

    },[])

    console.log(blogs.title)
    return(
        <>
            <h1>My Blogs</h1>
            <div className="blogs_box">
                {
                    blogs.length === 0 ? <p>No blogs found</p> :
                    blogs.map((blog) => {
                        return (<div className="individual_blog">
                            <h1>
                                <Link onClick={() => {
                                }} to={`/myblogs/${blog}`}>
                                    {blog}
                                </Link>
                            </h1>
                        </div>)
                    })
                }
            </div>
        </>
    )
}

export default MyBlogs