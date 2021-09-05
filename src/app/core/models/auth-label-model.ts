import { TenantRole } from "./auth-model";

export interface AuthLabel {
    userName: string;
    defaultTenant: TenantRole;
    tenants: TenantRole[];
}

export class AuthLabelImpl implements AuthLabel {
    
    constructor(name: string, tenants: TenantRole[], defaultTenant: TenantRole) {
        this.userName = name;
        this.tenants = tenants;
        this.defaultTenant = defaultTenant;
    }

    userName: string;
    tenants: TenantRole[];
    defaultTenant: TenantRole;
}