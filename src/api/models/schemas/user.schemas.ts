import { Schema, model } from "mongoose";
import { ServerUser } from "../user.model";

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

userSchema.methods.toJSON = function () {
    let obj = this.toObject();
    delete obj.password;
    delete obj.__v;
    delete obj._id;
    return obj;
}

export const User = model<ServerUser>('User', userSchema);
