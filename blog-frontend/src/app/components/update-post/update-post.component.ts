import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/post.service';
import { PostDto } from 'src/blog-api/src/models';
import { PostsService } from 'src/blog-api/src/services';


@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {
  id?: number;
  post: PostDto={};
  form: any;
  permaLink: any;

 
  

  constructor(private service:PostService ,private postService:PostsService,private router:Router,public activatedRoute: ActivatedRoute) {
    
   
    
  }
   
   

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['i'];
    this.postService.findById(this.id!).subscribe((data: PostDto)=>{
      this.post = data;
    });
   
  }
  update(){
    this.id = this.activatedRoute.snapshot.params['i'];
    console.log(this.id)
    this.service.updatePost(this.id!, this.post).subscribe(res => {
         console.log('Post updated successfully!');
         this.router.navigate(['/']);
    })
  }


}
