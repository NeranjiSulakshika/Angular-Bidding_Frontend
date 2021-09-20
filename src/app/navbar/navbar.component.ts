import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch, faHome, faCommentAlt , faBell } from '@fortawesome/free-solid-svg-icons';
import { AccountService } from '../_services';
import { User } from '../_models';

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

  user!: User;

  constructor(private router: Router, private accountService: AccountService) { 
    this.accountService.user.subscribe((x: User) => this.user = x);
  }

  ngOnInit() {
  }
  
  logout() {
    this.accountService.logout();
}

}



