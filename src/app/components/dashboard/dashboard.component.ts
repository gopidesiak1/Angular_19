import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { AuthserviceService } from '../../services/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

    private _authService = inject(AuthserviceService);
  private _router = inject(Router);
  logout() {
    this._authService.logout();
    this._router.navigate(['/home1']);
  }

}
