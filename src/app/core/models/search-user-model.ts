export interface ISearchUser {
    id: number;
    firstName: string;
    lastName: string;
}

export class SearchUser implements ISearchUser {
    id: number;
    lastName: string;
    firstName: string;
}
