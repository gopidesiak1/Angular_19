import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-selected-course',
  imports: [RouterModule,MatButtonModule],
  templateUrl: './selected-course.component.html',
  styleUrl: './selected-course.component.css',
  preserveWhitespaces: true
})
export class SelectedCourseComponent implements OnInit{
   
  

   private _activatedRoute=inject(ActivatedRoute);
   private _router=inject(Router)

   myCourse:any;


  ngOnInit(): void {

    // route params

    this._activatedRoute.paramMap.subscribe((p) => {
      const courseParam = p.get('course');
      if (!courseParam) {
        this.myCourse = null;
        return;
      }

      try {
        this.myCourse = JSON.parse(courseParam);
      } catch (err) {
        console.error('Failed to parse course param JSON:', err);
        this.myCourse = null;
      }
    });  


    // old style  Query params

   /* this._activatedRoute.queryParams.subscribe((p) => {
      const courseParam=p['selectedCourse']
      if (!courseParam) {
        this.myCourse = null;
        return;
      }

      try {
        this.myCourse = JSON.parse(courseParam);
      } catch (err) {
        console.error('Failed to parse course param JSON:', err);
        this.myCourse = null;
      }
    }); */

    // new style

  /*this._activatedRoute.queryParamMap.subscribe((p) => {
      const courseParam=p.get('selectedCourse')
      if (!courseParam) {
        this.myCourse = null;
        return;
      }

      try {
        this.myCourse = JSON.parse(courseParam);
      } catch (err) {
        console.error('Failed to parse course param JSON:', err);
        this.myCourse = null;
      }
    });  */

    
    
  }

  goBack(){
   this._router.navigate(['/course-details',this.myCourse.id])
  }

  ViewDetails(){
     this._router.navigate(['selectedCourseDetails'],
      {relativeTo:this._activatedRoute})
     }

  }


