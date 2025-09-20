# from bson import ObjectId
# from backend. import *
from ..database import blogs_collection,blogs_collection_sentiment
# from database import *
def blogs_obj_helper(blog) -> dict:
    return {
        "id" : str(blog["_id"]),
        "title":blog['title'],
        "content":blog['content']
    }

def blogs_sentiment_helper(blog_sentiment_obj) -> dict:
    return {
        "id": str(blog_sentiment_obj["_id"]),
        "sentiment": blog_sentiment_obj['sentiment']
    }


# crud operations

# create blog service method

async def create_blog(blog : dict) -> dict:
    result = await blogs_collection.insert_one(blog)
    actual_mongo_blog = await blogs_collection.find_one({"_id":result.inserted_id})
    return blogs_obj_helper(actual_mongo_blog)


async def get_all_blogs() -> list:
    titles_list = []
    blogs_list = blogs_collection.find()
    async for i in blogs_list:
        titles_list.append(i["title"])
    return titles_list

async def find_blog(title : str) -> dict:
    result_blog = await blogs_collection.find_one({"title":title})
    if result_blog:
        return blogs_obj_helper(result_blog)
    return None


