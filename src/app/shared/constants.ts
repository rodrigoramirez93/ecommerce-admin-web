
export class ValidationConstants{
    
    public static MIN_LENGTH_USERNAME: number = 4;
    public static MAX_LENGTH_USERNAME: number = 15;

    public static MIN_LENGTH_PASSWORD: number = 4;
    public static MAX_LENGTH_PASSWORD: number = 15;
    
}

export class ErrorMessages {

    public static REQUIRED_ERROR_MESSAGE = (property) => {
        return `${property} is required`;  
    }

    public static MIN_LENGTH_ERROR_MESSAGE = (property, minLength) => {
      return `${property} must be at least ${minLength} characters long.`;  
    }

    public static MAX_LENGTH_ERROR_MESSAGE = (property, maxLength) => {
        return `${property} must be up to ${maxLength} characters long.`;  
    }
}

export class API { 

    public static BASE_API = "https://e-commerce.azurewebsites.net";
    public static LOGIN = "https://jsonplaceholder.typicode.com/posts";
}