import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MatButtonModule,MatInputModule,MatFormFieldModule,CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username:string='';
  password:string='';

  private _router=inject(Router);

  onLogIn(){

   const isSuccess =""

   if(isSuccess){
    this._router.navigate(['/dashboard'])
   }else{
    alert("Credentials is worng")
   }

  }
}
