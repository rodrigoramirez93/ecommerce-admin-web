export interface AuthLabel {

    userName: string;
    role: string;
    tenant: string;
}

export class AuthLabelImpl implements AuthLabel {
    
    constructor(name: string, role: string, tenant: string) {
        this.userName = name;
        this.role = role;
        this.tenant = tenant;
    }

    userName: string;
    role: string;
    tenant: string;
}