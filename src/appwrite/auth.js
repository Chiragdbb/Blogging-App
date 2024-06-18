import { Client, Account, ID } from "appwrite";
import config from "../config/config";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                // if user is created successfully, then login
                this.login({ email, password })
            } else {
                return userAccount
            }
        } catch (error) {
            console.log("Error in creating user Account:", error)
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            console.log("Error in login:", error)
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Error in getting current user:", error)
        }
        return null;
    }

    async logout(){
        try {
            return this.account.deleteSessions()
        } catch (error) {
            console.log("Error in logging out:", error)
        }
    }
}

const authService = new AuthService()

export default authService