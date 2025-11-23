import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {


   coursesList=[
    {id:1,name:'Angular',tutor:'anil'},
    {id:2,name:'react',tutor:'kumar'},
    {id:3,name:'java',tutor:'pavan'}, 
    {id:4,name:'python',tutor:'desi'}, 
    {id:5,name:'c++',tutor:'gopi'},
   ]
}
