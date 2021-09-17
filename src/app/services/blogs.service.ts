import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http:HttpClient) { }

  public blogsData:Array<any> = [];

  public postBlog(data:any)
  {
    return new Promise<any>((resolve, reject) => 
    {
      this.http.post('http://localhost:3000/blogs', data).subscribe(
        (res)=> {
          resolve(res);
        },
        (err)=> {
          reject(err);
        }
      );
    });
  }

  public fetchBlogs() {
    return new Promise<any>((resolve, reject)=> {
      this.http.get('http://localhost:3000/blogs').subscribe(
        (res)=> {
          resolve(res);
        },
        (err)=> {
          reject(err);
        }
      );
    });
  }

  updateBlog(blogsData:any) {
    return new Promise<any>((resolve, reject)=> {
      this.http.put('http://localhost:3000/blogs/' + blogsData.id, blogsData).subscribe(
        (res)=> {
          resolve(res);
        },
        (err)=> {
          reject(err);
        }
      );
    });
  }

}
