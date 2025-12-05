import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AuthserviceService } from '../../services/authservice.service';

@Component({
  selector: 'app-home1',
  imports: [MatInputModule,MatButtonModule,RouterModule],
  templateUrl: './home1.component.html',
  styleUrl: './home1.component.css'
})
export class Home1Component {

  private authService=inject(AuthserviceService);

  loginAsAdmin() {
    this.authService.login1("admin");
    alert('Logged in As Admin ✅');
  }
  logout() {
    this.authService.logout1();
    alert('Loggged Out ');
  }
  loginAsUser() {
    this.authService.login1('user');
    alert('Logged in As User ✅');
  }

}
