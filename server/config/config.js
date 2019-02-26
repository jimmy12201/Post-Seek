let env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    process.env.PORT = 8080;
    
    //link to mongoDB cluster
    process.env.MONGODB_URI = 'mongodb://william:root@cluster0-shard-00-00-3xb3k.gcp.mongodb.net:27017,cluster0-shard-00-01-3xb3k.gcp.mongodb.net:27017,cluster0-shard-00-02-3xb3k.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
}