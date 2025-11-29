import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { DemoComponent } from '../demo/demo.component';


@Component({
  selector: 'app-home',
  imports: [MatButtonModule,MatInputModule,DemoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  
  inputValue:any;

  onClick(value: any){
    this.inputValue=value
  }

}
