export interface User {
    id: number;
    name: string;
    avatar: string;
}

export interface UserSchema {
    authData?: User;

}