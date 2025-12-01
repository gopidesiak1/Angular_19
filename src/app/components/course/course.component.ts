import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
   
   private _courseService=inject(CourseService);

   courseList:any=[];

    ngOnInit(): void {
     this.getCourseNames(); 
   }

   getCourseNames(){
     this._courseService.getCourseNames().subscribe({
        next:(res:any)=>{
          console.log("service called")
          this.courseList=res;
          console.log("getting result :",res)
        },
        error:(res:any)=>{
         // console.log("error getting while calling the Error",error)
        }
      })
   }


}
