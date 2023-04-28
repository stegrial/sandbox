# Sandbox

## To open simple page examples

Start from the repository root

1. Make sure you have the Python installed.
2. Start simple HTTP server in Python: \
Python 2: ```python -m SimpleHTTPServer 8000``` \
Python 3: ```python3 -m http.server 8000```
3. Open a simple page example in your browser
```shell
localhost:8000/relative_path_to_the_page_file
```
for example: ```localhost:8000/sandbox/lite_application/index.html```

If you have changed the server port, use it in the URL accordingly.

## Using Docker

1. Install Docker
2. Build Docker container:
```shell
docker build -t sandbox .
```
3. Run Docker container:
```shell
docker run -p 8000:8000 sandbox
```
