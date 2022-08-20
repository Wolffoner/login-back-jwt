import { Schema, model } from "mongoose";
import { ServerUser } from "../interfaces.ts/user.interface";

const userSchema = new Schema<ServerUser>({
    id: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    surname: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false
    },
    role: {
        type: String,
        required: false
    }
});

export const User = model<ServerUser>('User', userSchema);
