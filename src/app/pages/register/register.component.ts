import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { globalProperties } from '../../shared/globalProperties';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { SnackbarService } from '../../services/snackbar.service';
import { error } from 'console';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';

@Component({
 selector: 'register',
  standalone: true,
  imports: [AngularMaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [UserService, SnackbarService]
})
export class RegisterComponent {


  public registerForm: any = FormGroup
 public responseMsg: any = ''
 constructor(private _userService: UserService,
            private _formBuilder: FormBuilder,
            private _router: Router,
            private _snackbar: SnackbarService
 ){}

 ngOnInit(): void {
   this.registerForm = this._formBuilder.group({
    name: ['', [Validators.required, Validators.pattern(globalProperties.nameRegx)]],
    email: ['', [Validators.required, Validators.pattern(globalProperties.emailRegx)]],
    password: ['', Validators.required],
    phone: ['',[Validators.required, Validators.pattern(globalProperties.phoneRegex)]],
    apartment: [''],
    street: [''],
    city: [''],
    state: [''],
    zip: [''],
    country: ['']
   })
 }
    
    onRegister(){
      const data=this.registerForm.value;
      this._userService.userRegister(data)
      .subscribe({
        next:(res:any)=>{
          this.responseMsg = res.message
      this._snackbar.openSnackbar(this.responseMsg, 'success')
      this._router.navigate(['/'])
        },
      
    error:(err:any)=>{
      if(err.error?.message){
        this.responseMsg = err.error?.message
      }
      else{
        this.responseMsg = globalProperties.genericError
      }
      this._snackbar.openSnackbar(this.responseMsg, globalProperties.error)
    
    }
    })

    }



}
