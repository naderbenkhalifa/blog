package com.benkhalifa.blog.api.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import com.benkhalifa.blog.api.controller.api.PostApi;
import com.benkhalifa.blog.api.dto.PostDto;
import com.benkhalifa.blog.api.service.PostService;


@CrossOrigin(origins ="*")
@RestController

public class PostController implements PostApi {
	@Autowired
    private PostService service;
	

	@Override
	public PostDto save(PostDto postDto) {
		return service.createPost(postDto);
	}
	

	@Override
	public List<PostDto> findAll() {
		return service.getAll();
	}
	

	@Override
	public void delete(Long id) {
		service.deletePostById(id);
	}
	

	@Override
	public PostDto findById(Long id) {
		return service.getPostById(id);
	}
	

	@Override
	public PostDto update(Long id, PostDto PostDto) {
		return service.updatePost(id, PostDto);
	}

   
}

 
    
   
  
   


