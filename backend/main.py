import logging
import sys

from typing import Union

from fastapi import FastAPI

from dotenv import load_dotenv

load_dotenv()

from llama_index.prompts import PromptTemplate
from llama_index import VectorStoreIndex, SimpleDirectoryReader, SimpleWebPageReader, SummaryIndex, StorageContext, load_index_from_storage
from llama_index.indices.composability import ComposableGraph

logging.basicConfig(stream=sys.stdout, level=logging.INFO)
logging.getLogger().addHandler(logging.StreamHandler(stream=sys.stdout))

text_qa_template_str = (
    "Context information is below.\n"
    "---------------------\n"
    "{context_str}\n"
    "---------------------\n"
    "Using context information and your own knowledge base answer the question: {query_str}\n"
    "Always prefer to answer a question using context.\n"
    "Answer in language in what question was asked.\n"
)
text_qa_template = PromptTemplate(text_qa_template_str)

storage_context_dir = StorageContext.from_defaults(persist_dir="./storage-dir")
indexDir = load_index_from_storage(storage_context_dir)

storage_context_web = StorageContext.from_defaults(persist_dir="./storage-web")
indexWeb = load_index_from_storage(storage_context_web)

graph = ComposableGraph.from_indices(SummaryIndex, [indexDir, indexWeb], index_summaries=["summary1", "summary2"])

query_engine = graph.as_query_engine(text_qa_template=text_qa_template)

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/{query}")
def read_item(query: str, filter: Union[str, None] = None):
    return query_engine.query(query)
