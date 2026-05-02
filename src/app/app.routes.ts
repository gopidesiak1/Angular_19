import { ExtraOptions, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
     /*{
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
    } */

    {
        path:"",
        redirectTo:"/home",
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
       path: 'admin',
       loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    },
    {
        path:'**',
        component:PageNotFoundComponent
    },
    
];

// const routerOptions :ExtraOptions={
//     anchorScrolling:'enabled',
//     scrollOffset:[0,64],
//     useHash:true
// }

