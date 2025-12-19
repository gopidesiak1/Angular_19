import { ExtraOptions, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CourseComponent } from './components/course/course.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { DocsComponent } from './components/docs/docs.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { SelectedCourseComponent } from './components/selected-course/selected-course.component';
import { SelectedCourseDetailComponent } from './components/selected-course-detail/selected-course-detail.component';
import { Home1Component } from './components/home1/home1.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './gurads/auth.guard';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminSettingsComponent } from './admin/admin-settings/admin-settings.component';
import { adminGuard } from './gurads/admin.guard';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { BuiltInPipesComponent } from './components/built-in-pipes/built-in-pipes.component';

export const routes: Routes = [
     {
         path: '',
        redirectTo: '/home1',
         pathMatch: 'full'
      },
    //  {
    //      path: 'header',
    //      component: HeaderComponent
    //  }, 
    {
       path:'home1',
       component:Home1Component
    },
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
        component:SelectedCourseComponent,
        children :[
            {
            path:'selectedCourseDetails',
            component:SelectedCourseDetailComponent
            }

        ] 
    },
    {
        path:'selected-course',
        component:SelectedCourseComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'dashboard',
        canActivate:[authGuard],
        component:DashboardComponent
    },
    {
        path: 'unauthorized',
        component: UnauthorizedComponent,
    }, 
    {
        path:'admin',
        canActivateChild:[adminGuard],
        children:[
        {
            path:'dashboard',
            component:AdminDashboardComponent
        },
        {
            path:'users',
            component:AdminUsersComponent
        },
        {
            path:'settings',
            component:AdminSettingsComponent
        }
    ]
        
    },
    {
      path:'built-in-pipes',
      component:BuiltInPipesComponent
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