import dotenv from "dotenv";

dotenv.config();

const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_USER;
const MONGO_DB = process.env.MONGO_DB;
const MONGO_CLUSTER = process.env.MONGO_CLUSTER;


export const serverConfig = {
    environment: process.env.NODE_ENV,
    port: process.env.SERVER_PORT || 4000,
    mongoUrl: process.env.MONGO_URL || `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}/${MONGO_DB}?retryWrites=true&w=majority`,
}
