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

export interface TenantRole
{
    tenantId: number;
    tenantName: string;
    roleId: number;
    roleName: string;
}

export interface User{
    id: string;
    firstName: string;
    lastName: string;
    tenantsRoles: TenantRole[];
}

export interface Token{
    idToken: string;
    expirationDate: Date;
    user: User
}
