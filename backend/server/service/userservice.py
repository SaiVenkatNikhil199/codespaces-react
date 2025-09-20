from ..database import users_collection
from bson import ObjectId

def user_obj_helper_no_password(user) -> dict:
    return {
        "id" : str(user["_id"]),
        "username":user['username'],
        "password":user['password']
    }

def user_obj_helper(user) -> dict:
    return {
        "id": str(user["_id"]),
        "username":user['username'],
        "password":user['password']
    }

# crud operations

async def add_user(user : dict) -> dict:

    result = await users_collection.insert_one(user)
    user_inserted = await users_collection.find_one({"_id":result.inserted_id})
    return user_obj_helper_no_password(user_inserted)

async def get_user(username: str) -> dict:
    user = await users_collection.find_one({"username":username})
    if(user):
        return user_obj_helper(user)
    return None


# --- IGNORE ---