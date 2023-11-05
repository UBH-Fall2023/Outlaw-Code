import pymongo
from util.Database import Database 
import bcrypt
from util.Helpers import getCookies
from util.globals import DATABASE
class Accounts:
    def __init__(self):
        self.db = DATABASE
    def createUser(self,username,password,otherUserElements: [] = None):
        login = {'username':username,
             'salt':bcrypt.gensalt(),
             'passwordHash':None,
             'files':None}
        login['passwordHash'] = bcrypt.hashpw(password.encode(),login['salt'])
        self.db.insertOne('accounts',login)
        

    def login(self,username,password):
        possibleUsers = self.db.find_asList('accounts',{'username':username})
        for user in possibleUsers:
            if user['passwordHash'] == bcrypt.hashpw(password.encode(),user['salt']): 
                return(True,user)
            
        return (False,None)
    
    def authenticate(self,requestIn):
        TOKENSALT = self.db.findFirst('tokenSalt')['tokenSalt']
        #cookies = getCookies(requestIn)
        user = None
        username = 'Guest'
        if cookies != None and cookies.keys().__contains__('token'):
            #check if hashed token ex
            tokenMatches = self.db.find_asList('userTokens',{'token':(bcrypt.hashpw(cookies['token'].encode(),TOKENSALT))})
            if len(tokenMatches) > 0:
                user  = tokenMatches[0]
                username = user['username']
            print(f'NUM TOKEN MATCHES: {len(tokenMatches)}')
        return (username,user)
    
