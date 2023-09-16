import logging
import sys

from typing import Union

from fastapi import FastAPI

from dotenv import load_dotenv

load_dotenv()

from llama_index import VectorStoreIndex, SimpleDirectoryReader, StorageContext, load_index_from_storage
from llama_index.prompts import PromptTemplate

logging.basicConfig(stream=sys.stdout, level=logging.INFO)
logging.getLogger().addHandler(logging.StreamHandler(stream=sys.stdout))

text_qa_template_str = (
    "Context information is below.\n"
    "---------------------\n"
    "{context_str}\n"
    "---------------------\n"
    "Using only context information answer the question: {query_str}\n"
)
text_qa_template = PromptTemplate(text_qa_template_str)

refine_template_str = (
    "The original question is as follows: {query_str}\n"
    "We have provided an existing answer: {existing_answer}\n"
    "We have the opportunity to refine the existing answer "
    "(only if needed) with some more context below.\n"
    "------------\n"
    "{context_msg}\n"
    "------------\n"
    "Using both the new context and the old context, update or repeat the existing answer.\n"
)
refine_template = PromptTemplate(refine_template_str)


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
    return index.as_query_engine(text_qa_template=text_qa_template, refine_template=refine_template
    ).query(query)