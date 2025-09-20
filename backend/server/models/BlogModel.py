from pydantic import BaseModel,Field
# request model , of what the user will the data
class Blog(BaseModel):
    title : str = Field(...)
    content : str = Field(...)

    # mock data of what will be display to the displayed in the swagger UI
    class Config:
        schema_extra = {
            "example" : {
                "title" : "JavaScript",
                "content" : "Js is a frontend programming language"
            }
        }

# response model of what the backend server will return once the sentiment analysis of the blog\n
# content is done , so this will be returned to the user of which the user can display of\n
# can do extra analysis of the data 
class BlogSentiment(Blog):
    id : str | None = None
    sentiment : str
    # mock data of what will be display to the displayed in the swagger UI
    class Config:
        schema_extra = {
            "example" : {
                "id" : "SIP123",
                "sentiment" : "Positive"
            }
        }

class ErrorRequestModel(BaseModel):
    error : str 
    code : int 
    msg : str

    class Config:
        schema_extra = {
            "example" : {
                "error" : "Validation Error",
                "code" : 400,
                "msg" : "The Title/content field cannot be empty"
            }
        }

class BlogReponse(BaseModel):
    id : str 
    title : str
    content : str
    


