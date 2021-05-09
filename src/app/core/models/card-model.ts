export interface Card
{
    titleText: string;
    contentText: string;
    redirectRoute: string;
    buttonText: string;
}

export interface Cards
{
    context: string;
    cardList: Card[]
}