export interface TokenDto{
    idToken: string;
    expirationDate: Date;
}

export interface TokenDtoResponse {
    token: TokenDto,
    httpStatusCode: number
}
  