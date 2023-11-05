import pymongo
class Database:
    
    def __init__(self,db_name: str, host: str, port: int):
        self.client = pymongo.MongoClient(host,port)
        serverStarted = False
        while not serverStarted:
            try:
                #with pymongo.timeout(5):
                self.client.list_database_names()
                serverStarted = True
                self.db = self.client[db_name]
            except pymongo.errors.ServerSelectionTimeoutError:
                #start database 
                print('Server not started')

        self.collections = {'acconts': self.db['accounts'],
                            'tokenSalt': self.db['tokenSalt']
                            }
                
    def createCollection(self,name :str):
        self.collections[name] = self.db[name]
        
    def insertOne(self,collection: str, data: dict):
        self.collections[collection].insert_one(data)
        
    def findAll(self,collection: str):
        return self.collections[collection].find()
    
    def findOne(self,collection: str,keysToSearch: dict):
        return self.collections[collection].find_one(keysToSearch)
    
    def updateOne(self,collection,docToUpdate: dict,dictToUpdateW: dict):
        self.collections[collection].update_one(docToUpdate,{'$set': dictToUpdateW})
    def findFirst(self,collection: str):
        cursor = self.collections[collection].find()
        list = []
        for ele in cursor:
            document = {}
            for key in ele.keys():
                document[key] = ele[key]
            list.append(document)
        if len(list) > 0: return list[0] 
        else: return None

    def find_asList(self,collection: str,keysToSearch: dict):
        cursor = self.collections[collection].find(keysToSearch)
        list = []
        for ele in cursor:
            document = {}
            for key in ele.keys():
                document[key] = ele[key]
            list.append(document)
        return list
    def deleteOne(self,collection,id):
        return self.collections[collection].delete_one({'_id':id})

    def findAll_asList(self,collection: str):
        cursor = self.collections[collection].find()
        list = []
        for ele in cursor:
            document = {}
            for key in ele.keys():
                document[key] = ele[key]
            list.append(document)
        return list
    def countDocs(self,collection: str,filter: dict):
        return self.collections[collection].count_documents(filter)
