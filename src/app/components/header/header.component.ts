import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { RouterOutlet, RouterLinkActive, RouterModule } from "@angular/router";
import { RouterLinkWithHref } from "@angular/router";
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  preserveWhitespaces: true
})
export class HeaderComponent {

  

}
