import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidator
{
    checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
        let pass = group.get('password').value;
        //console.log('pass', pass);
        let confirmPass = group.get('confirmPassword').value
        //console.log('confirmPass', confirmPass);
        return pass === confirmPass ? null : { notSame: true }
    }
}