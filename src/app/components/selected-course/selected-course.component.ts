import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selected-course',
  imports: [],
  templateUrl: './selected-course.component.html',
  styleUrl: './selected-course.component.css'
})
export class SelectedCourseComponent implements OnInit{
   
  

   private _activatedRoute=inject(ActivatedRoute);

   myCourse:any;


  ngOnInit(): void {
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
  }


}
