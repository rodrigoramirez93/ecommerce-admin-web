export interface Authentication {
    email: string;
    password: string;
}

export interface Signup {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
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
