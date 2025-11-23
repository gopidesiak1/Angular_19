import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


interface Course { id: number; name: string; tutor: string }

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  constructor(private _router:Router){

  }

  coursesList: Course[] = [
    {id:1,name:'Angular',tutor:'anil'},
    {id:2,name:'react',tutor:'kumar'},
    {id:3,name:'java',tutor:'pavan'}, 
    {id:4,name:'python',tutor:'desi'}, 
    {id:5,name:'c++',tutor:'gopi'},
   ]

   courseIds: Array<keyof Course> = [];

  ngOnInit() {
   this.courseIds = Object.keys(this.coursesList[0]!) as Array<keyof Course>;
   console.log(this.courseIds);
  }

  onSelect(course: Course){
    console.log("selected course.",course)
     this._router.navigate(['/selected-course',JSON.stringify(course)])

   }
}
