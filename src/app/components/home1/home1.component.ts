import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home1',
  imports: [MatInputModule,MatButtonModule,RouterModule],
  templateUrl: './home1.component.html',
  styleUrl: './home1.component.css'
})
export class Home1Component {

  loginAsAdmin() {
   
    alert('Logged in As Admin ✅');
  }
  logout() {
  
    alert('Loggged Out ');
  }
  loginAsUser() {
   
    alert('Logged in As User ✅');
  }

}
