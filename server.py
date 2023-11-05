from flask import Flask, make_response, send_from_directory,request,send_file
import os
from werkzeug.utils import secure_filename
from util.Database import Database
#from util.globals import DATABASE
#from util.Account import Accounts
import bcrypt
import random
from datetime import *
import pytz
import string
import mimetypes
app = Flask(__name__)
SAVEFOLDER = 'uploads'

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

@app.route('/ends/upload_file',methods=['GET','POST'])
def upload_file():
    response = 'File uploaded'
    #accounts = Accounts()
    token = None
    if 'cookies' in request.cookies: 
        token = request.cookies.get('token')
    #username,user = accounts.authenticate(token=token)
    username = 'Guest'
    if not os.path.exists(f'{SAVEFOLDER}/{username}'):
        os.mkdir(f'{SAVEFOLDER}/{username}')

    if request.method == 'POST':
        if 'file' in request.files:
            file = request.files['file']
            file.save(f'{os.getcwd()}/{SAVEFOLDER}/{username}/{secure_filename(file.filename)}')
    return response

@app.route('/ends/login',methods=['POST'])
def login():
    print(request)    
    rawUsername = None
    rawPassword = None
    accounts = Accounts()
    TOKENSALT = db.findFirst('tokenSalt')['tokenSalt']
    found,user = accounts.login(rawUsername,rawPassword)
    if found:
        #gen token
        randomToken = ''.join(random.choices(string.ascii_lowercase + string.digits,k=20))
        
        #Set expiration date of auth token to 7 hour in futue
        expiration = (pytz.timezone('US/Eastern').localize(datetime.now()) +
                        timedelta(hours=20))
        db.insertOne('userTokens',
                     {'username':user['username'],
                      'token': bcrypt.hashpw(randomToken.encode(),TOKENSALT)})  
        
        resp = make_response(f'User authenticaed')
        resp.set_cookie('token',randomToken,expires=expiration) 
    else:
        return 'login failed'

@app.route('/ends/getFile',methods=['POST'])
def getFile():
    #accounts = Accounts()
    token = None
    token = request.cookies.get('token')
    #username,user = accounts.authenticate(token=token)
    username = 'Guest'
    #only
    file = request.form.get('file')
    return send_file(f'{SAVEFOLDER}/{username}/{file}',mimetypes.guess_type(file)[0])
    #return send_from_directory(f'{os.getcwd()}/{SAVEFOLDER}',f'{secure_filename(file)}')
@app.route('/ends/register',methods=['POST'])
def regiter():
    print(request)
    rawUsername = None
    rawPassword = None

    acconuts = Accounts()
    acconuts.createUser(rawUsername,rawPassword)

    return 'account registered'

@app.route('/ends/view_files',methods=['GET'])
def getAllFiles():
    files = os.listdir(f'{SAVEFOLDER}/Guest')
    resp = ''
    for file in files:
        resp+=file + '|| \r\n'
    return make_response(resp)

if __name__ == '__main__':
     #start Database
    #db = DATABASE
    #initialize some database variables if database is new
    #if db.countDocs('tokenSalt',{}) <= 0:
     #   db.insertOne('tokenSalt',{'tokenSalt':bcrypt.gensalt()})
    app.run(host='192.168.1.31',port=5002)
