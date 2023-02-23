import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostDto } from 'src/blog-api/src/models';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  public updatePost(id:Number,post:PostDto):Observable<PostDto>{
    return this.httpClient.put<PostDto>('http://localhost:8010/api/posts/update/'+id,post);
  }
}
