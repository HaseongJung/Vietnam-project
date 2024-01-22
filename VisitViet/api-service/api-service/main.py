from fastapi import FastAPI
from prisma import Prisma
from rcm import recommend
from fastapi.middleware.cors import CORSMiddleware
from rcm_content_based import find_simi_place


app = FastAPI()
origins = [
    'http://172.21.0.1:3000/',
    'http://172.16.0.2:3000',
    'http://172.21.0.1:3000',
    'http://localhost:3000',
    # "10.220.19.176:8000",
    "http://10.220.19.176:8000",
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get('/')
async def check():
    return "hello"
@app.get("/{user_id}/")
async def get_data(user_id: str):
    query = '''select * from {item}'''.format(item = 'rating')
    async with Prisma() as db:
        data = await db.query_raw(    
            query
            ,
        )
        # data = await db.listItem[0].find_many()
        # for item in data:
        #     if item['rating'] > 10:
        #         res.append(item)   
    data_rating = []
    for item in data:
        data_rating.append([item['userId'], item['restaurantId'], item['ratingValue']])
    # return data_rating
    return recommend(user_id, data_rating)

@app.get('/content-based/{name_res}/')
async def qwe(name_res: str):
    print(name_res)
    list = find_simi_place(name_res)
    return list