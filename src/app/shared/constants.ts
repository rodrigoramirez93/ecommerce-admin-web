import { HttpHeaders } from '@angular/common/http';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

export class ValidationConstants{
    
    public static MIN_LENGTH_USERNAME: number = 4;
    public static MAX_LENGTH_USERNAME: number = 35;

    public static MIN_LENGTH_PASSWORD: number = 8;
    public static MAX_LENGTH_PASSWORD: number = 25;

    public static MIN_LENGTH_NAME: number = 2;
    public static MAX_LENGTH_NAME: number = 30;
}

export class LocalStorageKeys{
    public static TOKEN_EXPIRATION_DATE = 'expires_at';
    public static USER_ID = 'user_data_id';
    public static USER_FIRST_NAME = 'user_data_firstname';
    public static USER_LAST_NAME = 'user_data_lastname';
}

export class StyleConstants{
    public static SNACKBAR_HORIZONTAL_POSITION: MatSnackBarHorizontalPosition = 'end';
    public static SNACKBAR_VERTICAL_POSITION: MatSnackBarVerticalPosition = 'top';
    public static SNACKBAR_DURATION: number = 2000;
    public static SNACKBAR_TYPE_SUCCESS: string = "snackbar-success";
    public static SNACKBAR_TYPE_ERROR: string = "snackbar-error";
}

export class InformationMessages{

    public static REDIRECT = (route) => {
        return `Redirecting to ${route}`;
    }    

    public static ADDED_SUCCESFULLY = (object) => {
        return `${object} was added succesfully`
    }

}

export class ErrorMessages {

    public static INTERNAL_ERROR = () => {
        return 'Something went wrong';
    }

    public static UNAUTHORIZED = () => {
        return 'Username or password are incorrects';
    }

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
    public static BASE_API = environment.ApiUrl;
    public static IDENTITY = environment.IdentityUrl;
}

export class CONTROLLER {
    public static AUTH: string = "/Auth"
    public static PRODUCT: string = "/Product"
    public static ROLE: string = "/Role"    
    public static USER: string = "/User"
    public static ACCESS: string = "/Access"
    public static CLAIMS: string = "/Claim"
}

export class METHOD { 
    public static AUTH_SIGNIN: string = '/SignIn';
}
