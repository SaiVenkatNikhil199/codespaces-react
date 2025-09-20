from pydantic import BaseModel,Field

class User(BaseModel):
    username : str = Field(...)
    password : str = Field(...)

    class Config:
        schema_extra = {
            "example" : {
                "username" : "user",
                "password" : "pass123"
            }
        }

class UserResponse(BaseModel):
    id : str
    username : str 

    class Config:
        schema_extra = {
            "example": {
                "id" : "U123",
                "username": "user123"
            }
        }