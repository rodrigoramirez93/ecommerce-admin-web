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

export interface TokenDtoResponse {
    token: TokenDto,
    httpStatusCode: number
}
  