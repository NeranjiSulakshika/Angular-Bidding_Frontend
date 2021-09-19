import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faFacebook, faInstagram, faYoutube, faLinkedin, faSnapchat, faGooglePlus, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faHeart, faComment, faDownload, faBookmark, faShareAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-organization-profile',
  templateUrl: './organization-profile.component.html',
  styleUrls: ['./organization-profile.component.css']
})
export class OrganizationProfileComponent implements OnInit {
  
  faGlobe = faGlobe;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faLinkedin = faLinkedin;
  faSnapchat = faSnapchat;
  faGooglePlus = faGooglePlus;
  faDiscord = faDiscord;


  faHeart = faHeart;
  faComment = faComment;
  faDownload = faDownload;
  faBookmark = faBookmark;
  faShareAlt = faShareAlt;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
