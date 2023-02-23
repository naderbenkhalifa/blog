import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostDto } from 'src/blog-api/src/models';
import { PostsService } from 'src/blog-api/src/services';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: PostDto={};
  permaLink: any;

  constructor(private router: ActivatedRoute, private postService: PostsService) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.permaLink = params['id'];
    });

    this.postService.findById(this.permaLink).subscribe((data:PostDto) => {
      this.post = data;
    },(err: any) => {
      console.log('Failure Response');
    })
  }

}
