import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { post } from 'jquery';
import { PostDto } from 'src/blog-api/src/models';
import { PostComponent } from './components/post/post.component';


import { PostService } from './post.service';

describe('PostService', () => {
  let service: PostService;
  let httpMock: HttpTestingController;
  let id :number;
  let post:PostDto

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [PostService]


    });
   
   service = TestBed.inject(PostService) 
   httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should use Update method', () => {
    
    service.updatePost(id,post).subscribe();
    const req = httpMock.expectOne('http://localhost:8010/api/posts/update/'+id);
    expect(req.request.method).toBe('PUT');
  });
});
