import { Client, Account, ID } from "appwrite";
import { User } from "../api.type";

const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_API_ENDPOINT) // Your API Endpoint
    .setProject(import.meta.env.VITE_PROJECT_ID) // Your project ID
;
const account = new Account(client);

// add function to create user
export const createUser = async (user: User) => {
   return await account.create(ID.unique(), user.email, user.password, user.name ? user.name : '');
}

//add function to login user
export const loginUser = async (user: User) => {
  return await account.createEmailSession(user.email, user.password);
}


// add function to logout user
export const logoutUser = async () => {
  return await account.deleteSession('current');
};

