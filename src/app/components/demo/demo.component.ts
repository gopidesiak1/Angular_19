import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {


  @Input() message:any;


  constructor(){
   
    console.log("showmessage",this.message);
  }
  



}
