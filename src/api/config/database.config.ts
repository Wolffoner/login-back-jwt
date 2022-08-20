import mongoose from "mongoose";


class Database {
    private database;

    constructor() {
        this.database = mongoose;
    }

    connect(): void {
        //TODO: .env file
        this.database.connect("mongodb+srv://wolffoner:Leandro20@login-drixit.7t4qisb.mongodb.net/?retryWrites=true&w=majority", {
        }).then(() => {
            console.log("Database connected");
        }).catch(err => {
            console.log(err);
        });
    }
}

export default new Database();