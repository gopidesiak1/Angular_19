import { CommonModule } from '@angular/common';
import { Component, inject, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../services/course.service';


interface Course { id: number; name: string; tutor: string }

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  
  private _router=inject(Router);
  private _activateRoute=inject(ActivatedRoute);
  private courseService=inject(CourseService);

  coursesList: any=[];

   courseIds: Array<keyof Course> = [];
    courseId: number | undefined;
 /* ngOnInit() {
   this.courseIds = Object.keys(this.coursesList[0]!) as Array<keyof Course>;
  // console.log(this.courseIds);
   this._activateRoute.paramMap.subscribe(
    (params)=>
    {
      if(params) {
        const id = params.get('id');
        this.courseId = id ? parseInt(id, 10) : undefined;
      }
    }
   )
  } */

   ngOnInit() {

     this.courseService.getCourseNames().subscribe({
      next:(res:any)=>{
        this.coursesList=res;
         this.courseIds=Object.keys(this.coursesList[0]!)as Array<keyof Course>;
      }
     })

   //this.courseIds = Object.keys(this.coursesList[0]!) as Array<keyof Course>;
  // console.log(this.courseIds);
   this._activateRoute.paramMap.subscribe(
    (params)=>
    {
      if(params) {
        const id = params.get('id');
        this.courseId = id ? parseInt(id, 10) : undefined;
      }
    }
   )
  }

  onSelect(course: Course){
    console.log("selected course.",course)
    // route params
     this._router.navigate(['/selected-course',JSON.stringify(course)])

    // Query params
    /*this._router.navigate(['/selected-course'],{
      queryParams:
      {
        selectedCourse:JSON.stringify(course)
      }
    })  */

   }
}
