import {counterSchema} from "entitties/Counter";
import {UserSchema} from "entitties/User";

export interface StateSchema   {
    counter: counterSchema;
    user: UserSchema;
}