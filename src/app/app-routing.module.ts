import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { OrganizationProfileComponent } from './organization-profile/organization-profile.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
