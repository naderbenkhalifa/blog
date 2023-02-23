package com.benkhalifa.blog.api.service;

import java.util.List;

import com.benkhalifa.blog.api.dto.PostDto;



public interface PostService {
   //public List<PostDto> showAllPosts();
	 public List<PostDto> getAll();
	 public PostDto createPost(PostDto postDto);
	 public PostDto  getPostById(Long id);
  // public PostDto readSinglePost(Long id);
	 public PostDto  updatePost(Long id,PostDto postDto);
	 public void deletePostById(Long id);		
	 
	   

}
