import { Client, Databases, Account, Teams, Storage, ID, Query } from 'appwrite';

const client = new Client();
client
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENPOINT_KEY)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);  


export const account = new Account(client);
export const teams = new Teams(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export { ID, Query };

