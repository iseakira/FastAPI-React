from sqlalchemy.orm import Session

from . import models, schemas

def get_users(db:Session):
  return db.query(models.User).all()

def get_user(db:Session,user_id:int):
  return db.query(models.User).filter(models.User.id == user_id).first()

def get_user_by_name(db:Session,username:str):
  return db.query(models.User).filter(models.User.name == username).first()

def get_user_by_name_bypassword(db:Session,username:str,password:str):
  return db.query(models.User).filter(models.User.name == username).filter(models.User.password == password).first()

def create_user(db:Session,user:schemas.UserCreate):
  db_user = models.User(name=user.username,password=user.password)
  db.add(db_user)
  db.commit()
  db.refresh(db_user)
  return db_user



