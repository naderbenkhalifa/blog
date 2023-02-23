import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';
import { PostDto } from 'src/blog-api/src/models';
import { PostsService } from 'src/blog-api/src/services';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
   permaLink: any;
  addPostForm: any;
  posts: any;
  post: PostDto ={};
 title = new FormControl('');
  body = new FormControl('');
  username=new FormControl('');


  constructor(private postService: PostsService , private router: Router) { 
    this.addPostForm = new FormGroup({
      title: this.title,
      body: this.body,
      username:this.username,
      
    });
    this.post= {
      id: 1,
      content: '',
      title: '',
      username: ''
    
  }
}


  ngOnInit(): void {
    
      
  }

      
  
  addPost() {
    this.post.content = this.addPostForm.get('body').value;
    this.post.title = this.addPostForm.get('title').value;
    this.post.username=this.addPostForm.get('username').value;
    this.postService.save(this.post).subscribe(data => {
      this.router.navigateByUrl('/');
    }, error => {
      console.log('Failure Response');
    })
  }
 

}
