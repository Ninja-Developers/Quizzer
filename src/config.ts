import * as dotenv from 'dotenv';
dotenv.config();
export const PORT = 5000;
export const MONGO_URL = process.env.MONGO_URL;