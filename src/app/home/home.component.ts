import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';
import { faGlobe, faHeart, faComment, faDownload, faBookmark, faShareAlt } from '@fortawesome/free-solid-svg-icons';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
