import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function forbiddenName(name:RegExp):ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null=>{
    const val = control.value;
    return name.test(val) ?{forbidden:control.value}:null;

  }
}
