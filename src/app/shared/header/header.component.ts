import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';
import { jwtDecode } from 'jwt-decode';
import { RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'header',
  imports: [AngularMaterialModule, RouterModule, CommonModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

cartCount:Number=1;
   user: string = ''
   payload: any = {}
   token: string | null = null;
    constructor(private _storate:StorageService) {}

ngAfterViewChecked(): void {
   this.token = this._storate.getItem('token')
  if(this.token){
    this.payload = jwtDecode(this.token)
    this.user = this.payload.name
  }
  else{
    this.user= ''
  }

}

onExit(){
  sessionStorage.removeItem('token')
   this.user = ''
   this.payload = {}
}


}
