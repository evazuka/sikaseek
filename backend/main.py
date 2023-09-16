import logging
import sys

from typing import Union

from fastapi import FastAPI

from dotenv import load_dotenv

load_dotenv()

from llama_index import VectorStoreIndex, SimpleDirectoryReader, StorageContext, load_index_from_storage

logging.basicConfig(stream=sys.stdout, level=logging.INFO)
logging.getLogger().addHandler(logging.StreamHandler(stream=sys.stdout))


# GPT doesn't find the corresponding evidence in the leaf node, but still gives the correct answer
# set Logging to DEBUG for more detailed outputs
storage_context = StorageContext.from_defaults(persist_dir="./storage-vector")
# load index
index = load_index_from_storage(storage_context)

query_engine = index.as_query_engine()

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/{query}")
def read_item(query: str, filter: Union[str, None] = None):
    return query_engine.query(
    query
)