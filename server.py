from flask import Flask, make_response, send_from_directory

app = Flask(__name__)


@app.route("/<path:path>")
def getPage(path):
    print(path)
    root = '.'
    if not path.__contains__("public"):
        root = 'public'
    response = make_response(send_from_directory(root,path))
    response.headers['X-Content-Type-Options'] = 'nosniff'

    return response

@app.route("/")
def index():
    print()
    response = make_response(send_from_directory('public','index.html'))
    #add headers
    response.headers['X-Content-Type-Options'] = 'nosniff'

    return response
