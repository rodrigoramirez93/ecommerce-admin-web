export interface SearchUser {
    id: number;
    firstName: string;
    lastName: string;
}

export class SearchUserImpl implements SearchUser {

    constructor(firstName = "", lastName = "") {
        this.firstName = firstName,
        this.lastName = lastName
    }

    id: number;
    lastName: string;
    firstName: string;
}
