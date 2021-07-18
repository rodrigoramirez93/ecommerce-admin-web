import { EmailValidator } from "@angular/forms";

export interface Authentication {
    email: string;
    password: string;
}

export interface Signup {
    username: string;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    phoneNumber: string;
}

export interface User{
    id: string;
    firstName: string;
    lastName: string;
}

export interface Token{
    idToken: string;
    expirationDate: Date;
    user: User
}
