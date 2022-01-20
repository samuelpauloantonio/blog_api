export default {
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        host: process.env.MONGO_DATABASE_HOST,
        port: parseInt(process.env.MONGO_DATABASE_PORT, 10) || 27017,
        database_name: process.env.MONGO_DATABASE_NAME,
        properties: {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        },
    },
};
