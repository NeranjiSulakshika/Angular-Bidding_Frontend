import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './account/login.component';
import { RegisterComponent } from './account/register.component'; 
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { UserProfileComponent } from './account/user-profile/user-profile.component'; 
import { OrganizationProfileComponent } from './organization/organization-profile/organization-profile.component'; 
import { BlogComponent } from './blogs/blog/blog.component'; 
import { ViewBlogComponent } from './blogs/view-blog/view-blog.component';
import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
  {
    path:'', pathMatch:'full', redirectTo:'home'
  },
  { path:'home', 
    component: HomeComponent
  },
  {
    path:'login', 
    component: LoginComponent
  },
  {
    path:'register', 
    component: RegisterComponent
  },
  {
    path:'navbar', 
    component: NavbarComponent
  },
  {
    path:'post', 
    component: PostComponent
  },
  {
    path:'profile', 
    component: UserProfileComponent
  },
  {
    path:'organizationProfile', 
    component: OrganizationProfileComponent
  },
  {
    path:'blog', 
    component: BlogComponent
  },
  {
    path:'view/:blogindex',
    component: ViewBlogComponent
  },
  { 
    path: '', component: HomeComponent, canActivate: [AuthGuard] 
  },
  { 
    path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] 
  },
  { 
    path: 'account', loadChildren: accountModule 
  },
  {
    path:'log', 
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
