import motor.motor_asyncio

MONGO_URL = "mongodb+srv://sainikhilDB:blog_123@cluster0.qsaq1zv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
# MONGO_URL = "mongodb+srv://saivenkatnikhildandanayakula_db_user:blog_123@cluster0.qsaq1zv.mongodb.net/blog_database?retryWrites=true&w=majority&tls=true"

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URL)

db = client["blog_database"]        # this will be created on first insert
blogs_collection = db["blogs"]     # same for collection
blogs_collection_sentiment = db['blogs_sentiment']


#users
users_collection = db["users"]

