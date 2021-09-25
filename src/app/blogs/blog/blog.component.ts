import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { BlogsService } from 'src/app/services/blog-service/blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

  constructor(public blogService:BlogsService, private router:Router) { }

  ngOnInit(): void {
  }

  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '190px',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    sanitize: true,
    toolbarPosition: 'top',
};

username:string = "";
title:string = "";
content:string = "";
time:string = "";
numberOfLikes: number = 0;

today = new Date();

post()
{
  let obj = {
    author: this.username,
    title: this.title,
    content: this.content,
    comments: [],
    time: this.today.toLocaleString(),
    numberOfLikes: this.numberOfLikes

  }
  this.blogService.postBlog(obj).then((res) => {
    console.log(res);
    this.router.navigate(['/home']);
  }).catch((err) => {
    console.log(err);
  });
}

}

