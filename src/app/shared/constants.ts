import { HttpHeaders } from '@angular/common/http';

export class ValidationConstants{
    
    public static MIN_LENGTH_USERNAME: number = 4;
    public static MAX_LENGTH_USERNAME: number = 25;

    public static MIN_LENGTH_PASSWORD: number = 4;
    public static MAX_LENGTH_PASSWORD: number = 25;
    
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

    public static BASE_API = "https://localhost:44390";
}

export class CONTROLLER {
    public static AUTH = '/auth';
}

export class METHOD {
    public static LOGIN = '/signin';
}