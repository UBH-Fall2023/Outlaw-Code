from flask import Flask, make_response, send_from_directory,request
import os
from werkzeug.utils import secure_filename
app = Flask(__name__)


@app.route("/<path:path>",methods=['GET','POST'])
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

# @app.route('/upload_file.html',methods=['POST'])
# def upload()
@app.route('/upload_file',methods=['GET','POST'])
def upload_file():
    response = 'ya modda'
    if request.method == 'POST':
        if 'file' in request.files:
            file = request.files['file']
            file.save(f'{os.getcwd()}/{secure_filename(file.filename)}')
    return response
    

if __name__ == '__main__':
    app.run(port=5001)