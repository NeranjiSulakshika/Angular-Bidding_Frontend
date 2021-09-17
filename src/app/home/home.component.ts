import { Component, Inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';
import { faGlobe, faHeart, faComment, faDownload, faBookmark, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { BlogsService } from '../services/blogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  faHeart = faHeart;
  faComment = faComment;
  faDownload = faDownload;
  faBookmark = faBookmark;
  faShareAlt = faShareAlt;

  nav = NavbarComponent;

  
username:string = "";
title:string = "";
content:string = "";

  constructor(private router: Router, public blogService:BlogsService) { }

  ngOnInit(): void {
    this.blogService.fetchBlogs().then((res) => {
      console.log(res);
      this.blogService.blogsData = res;
    }).catch((err) => {
      console.log(err);
    });
  }

}