let key = "myblogs"

function addBlog(title,content) {
    // console.log("hello")
    let blogs = JSON.parse(localStorage.getItem(key)) || []

    if(blogs.some(blog => blog.title == title)) {
        return "please use a different title"
    }

    blogs.push({title,content})

    localStorage.setItem(key,JSON.stringify(blogs))
    
}

function getBlogs(){
    let blogs_obj = JSON.parse(localStorage.getItem(key)) || []
    return blogs_obj
}

// addBlog('','')

function updateBlog(title,newContent) {
    let blogs = JSON.parse(localStorage.getItem(key)) || []

    let filtered_blogs = blogs.find(blog => blog.title == title)
    if(filtered_blogs != null) {
        filtered_blogs.content = newContent
        localStorage.setItem(key,JSON.stringify(blogs))
    }

}

 function deleteBlogs(title) {
    let blogs = JSON.parse(localStorage.getItem(key)) || []

    let filtered_blogs = blogs.filter((blog) => {
        return blog.title != title
    })

    localStorage.setItem(key,JSON.stringify(filtered_blogs))
}
export {addBlog,getBlogs,updateBlog,deleteBlogs}