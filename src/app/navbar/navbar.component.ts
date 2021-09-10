import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch, faHome, faCommentAlt , faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  faHome = faHome;
  faSearch = faSearch;
  faBell = faBell;
  faCommentAlt = faCommentAlt;



  constructor(private router: Router) { }

  ngOnInit() {
  }

}



