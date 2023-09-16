from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/{query}")
def read_item(query: str, filter: Union[str, None] = None):
    return {"query": query, "filter": filter}