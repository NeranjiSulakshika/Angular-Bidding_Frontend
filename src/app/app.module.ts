import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './account/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PostComponent } from './post/post.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserProfileComponent } from './account/user-profile/user-profile.component'; 
import { OrganizationProfileComponent } from './organization/organization-profile/organization-profile.component'; 
import { ChatComponent } from './chat/chat.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RegisterComponent } from './account/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BlogComponent } from './blogs/blog/blog.component'; 
import {MatInputModule} from '@angular/material/input';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ViewBlogComponent } from './blogs/view-blog/view-blog.component';
import { OrganizationLoginComponent } from './organization/organization-login/organization-login.component';
import { OrganizationRegistrationComponent } from './organization/organization-registration/organization-registration.component'; 
import { fakeBackendProvider } from './_helpers';
import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    PostComponent,
    UserProfileComponent,
    OrganizationProfileComponent,
    ChatComponent,
    BlogComponent,
    ViewBlogComponent,
    OrganizationLoginComponent,
    OrganizationRegistrationComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    FontAwesomeModule,
    MatFormFieldModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    MDBBootstrapModule,
    ReactiveFormsModule,
    MatInputModule,
    AngularEditorModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,

    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
    ]),
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' }
    },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
