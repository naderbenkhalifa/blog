import { Component, OnInit } from '@angular/core';
import { PostDto } from 'src/blog-api/src/models';
import { PostsService } from 'src/blog-api/src/services';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  posts: Array<PostDto>=[];
  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.findAllPosts();
      };

  
  delete(id:number):void{ 
   
    this.postService.delete(id).subscribe(data => {
        this.findAllPosts();
      
      });
  }

  findAllPosts(){
        this.postService.findAll().subscribe(data => {
      this.posts=data;


      })}
     

}
