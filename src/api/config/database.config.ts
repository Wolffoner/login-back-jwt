import mongoose from "mongoose";

// TODO: Type database and remove logs
class Database {
    private database;

    constructor() {
        this.database = mongoose;
    }

    connect(url: string): void {
        this.database.connect(url, {
        }).then(() => {
            console.log("Database connected");
        }).catch(err => {
            console.log(err);
        });
    }
}

export default new Database();