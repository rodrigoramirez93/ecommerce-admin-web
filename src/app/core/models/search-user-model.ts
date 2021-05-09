export interface SearchUser {
    id: number;
    firstName: string;
    lastName: string;
}

export class SearchUserImpl implements SearchUser {
    id: number;
    lastName: string;
    firstName: string;
}
