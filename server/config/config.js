let env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    process.env.PORT = 8080;
    process.env.MONGODB_URI = 'mongodb+srv://root:root@cluster0-lxvak.gcp.mongodb.net/test?retryWrites=true';
}