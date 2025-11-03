from fastapi import FastAPI

app = FastAPI()

fake_items_db = [{"item_name": "Foo"}, {"item_name": "Bar"}, {"item_name": "Baz"}]


#パスパラメーター
@app.get("/items/{item_id}")
def reat_item(item_id: int):
    return {"item_id": item_id}
