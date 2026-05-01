import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';


@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
   

   courseList:any=[];

    ngOnInit(): void {
     this.getCourseNames(); 
   }

   getCourseNames(){
    
   }


}
