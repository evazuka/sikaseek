# SikaSeek Backend

This folder contains info about SikaSeek backend

## How to run

This backend ships with pretrained model and ready vector index.

To run it:

1. Unzip vector index from `Archive.zip` to `./backend`
1. Provide your own OpenAI API key by creating `.env` file out of `.env.template`
1. Install python dependencies by running `pip3 --no-cache-dir install -r requirements.txt`
1. Run app `uvicorn main:app --reload`

## How to build an index

You can build an index for this backend yourself.

1. Provide your own OpenAI API key by creating `.env` file out of `.env.template`
1. Prepare your dataset: put all the relevant .pdf, .txt, .docx, .jpg, .xlsx, etc., files in `data-full` folder
1. Go through jupyter notebooks, either through `sika-full-vector.ipynb` to build document-only index, or through `sika-full-webpage-vector.ipynb` to build mixed index of both web and document data
