from fastapi import FastAPI
# import models.BlogModel as BlogModel
from fastapi.middleware.cors import CORSMiddleware

from fastapi import HTTPException

from .models import (
    BlogModel
)

from .models.User import (
    User 
)

from .service.blogservice import (
    create_blog,
    get_all_blogs,
    find_blog
)

from .service.userservice import (
    add_user,
    get_user
)

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for development, allows all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/",tags=["Root"])
async def application():
    return "Welcome to BlogBurg App"


@app.post("/create_blog",tags=["/crud"],response_model=BlogModel.BlogReponse)
async def create_blog_route(blog: BlogModel.Blog):
    try:
        blog_dict = blog.dict()
        result_blog = await create_blog(blog_dict)
        if result_blog is None:
            raise HTTPException(status_code=500, detail="Failed to create blog")
        return result_blog
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Exception: {str(e)}"
        )


@app.get("/all_blogs",tags=["/crud"])
async def get_all_blogs_route() -> list:
    blogs = await get_all_blogs()
    if(blogs):
        return blogs 
    raise HTTPException(
        status_code=400,
        detail=BlogModel.ErrorRequestModel(
            error="blogs not found",
            code=400,
            msg="No blogs exist"
        ).model_dump()
    )

@app.get("/get_blog/{title}",tags=["/crud"])
async def get_blog(title):
    blog = await find_blog(title)
    if blog:
        return blog 
    raise HTTPException(
        status_code=400,
        detail=BlogModel.ErrorRequestModel(
            error="blog not found",
            code=400,
            msg="No blog exist with tht title"
        ).model_dump()
    )

# --- IGNORE ---

#user routes

@app.post("/add_user",tags=["/user"])
async def add_user_route(user_param : User):
    try:
        user = await add_user(user_param.dict())
        if(user is None):
            return HTTPException(status_code=500,detail="Failed to adda user")
        return user
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Exception: {str(e)}"
        )
    

@app.get("/get_user/{username}",tags=["/user"])
async def get_user_route(username:str):
    user = await get_user(username)
    if(user):
        return user
    raise HTTPException(
        status_code=400,
        detail=BlogModel.ErrorRequestModel(
            error="user not found",
            code=400,
            msg="No user exist with tht username"
        ).model_dump()
    )   

# --- IGNORE ---

@app.post("/login",tags=["/user"])
async def login(user : User):
    details = user.dict()
    password = details["password"]
    user = await get_user(details["username"])
    if(user["password"] == password):
        return user
    raise HTTPException(
        status_code=400,
        detail=BlogModel.ErrorRequestModel(
            error="user not found",
            code=400,
            msg="No user exist with tht username"
        ).model_dump()
    )