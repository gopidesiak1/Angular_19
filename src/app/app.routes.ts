import { ExtraOptions, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CourseComponent } from './components/course/course.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { DocsComponent } from './components/docs/docs.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { SelectedCourseComponent } from './components/selected-course/selected-course.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/course',
        pathMatch: 'full'
    },
    // {
    //     path: 'header',
    //     component: HeaderComponent
    // }, 
    {
        path: 'course',
        component: CourseComponent
    }, 
    {
        path: 'course-details',
        component: CourseDetailsComponent
    },
    {
        path: 'course-details/:id',
        component: CourseDetailsComponent
    },
    {
        path:'docs',
        component:DocsComponent 
    },
    {
        path:'selected-course/:course',
        component:SelectedCourseComponent
    },
    {
        path:'selected-course',
        component:SelectedCourseComponent
    },
    {
        path:'**',
        component:PageNotfoundComponent
    }


];
const routerOptions :ExtraOptions={
    anchorScrolling:'enabled',
    scrollOffset:[0,64],
    useHash:true
}