export interface UserDto{
    id: string;
    firstName: string;
    lastName: string;
}

export interface TokenDto{
    idToken: string;
    expirationDate: Date;
    user: UserDto
}
  