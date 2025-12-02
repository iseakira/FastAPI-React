from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session

from .import models, schemas, crud
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
  db = SessionLocal()
  try:
    yield db
  finally:
    db.close()

@app.post("/users", response_model=schemas.User)
def create_user(user:schemas.UserCreate, db:Session=Depends(get_db)):
  db_user = crud.get_user_by_name(db,username=user.name)
  if db_user:
    raise HTTPException(status_code=400, detail="Username already registered")
  return crud.create_user(db=db,user=user)

@app.get("/users/",response_model=schemas.User)
def read_user(name:str,password:str, db:Session=Depends(get_db)):
  db_user = crud.get_user_by_name_by_password(db,username=name,password=password)
  if db_user is None:
    raise HTTPException(status_code=404, detail="User not found")
  return db_user

@app.post("/sales/",response_model=schemas.Sales)
def create_sales(sales:schemas.SalesCreate, db:Session=Depends(get_db)):
  db_sales = crud.get_sales_by_year_by_department(db,year=sales.year,department=sales.department)
  if db_sales:
    raise HTTPException(status_code=400, detail="Sales data already exists for this year and department")

  return crud.create_sales(db=db,sales=sales)