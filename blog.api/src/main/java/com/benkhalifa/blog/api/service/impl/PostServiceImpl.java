package com.benkhalifa.blog.api.service.impl;

import java.time.Instant;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.benkhalifa.blog.api.dto.PostDto;
import com.benkhalifa.blog.api.exception.PostNotFoundException;
import com.benkhalifa.blog.api.model.Post;
import com.benkhalifa.blog.api.model.User;
import com.benkhalifa.blog.api.repository.PostRepository;
import com.benkhalifa.blog.api.service.PostService;
import static java.util.stream.Collectors.toList;



@Service
public class PostServiceImpl implements PostService {
	@Autowired
	private PostRepository repo;
	
	//@Autowired
	//private User user;

	
	@Override
	public List<PostDto> getAll() {
		 List<Post> posts = repo.findAll();
	        return posts.stream().map(this::mapFromPostToDto).collect(toList());
		
		
	}

	@Override
	public PostDto createPost(PostDto postDto) {
		Post post=mapFromDtoToPost(postDto);
		return mapFromPostToDto(repo.save(post)) ;
	}

	@Override
	public PostDto getPostById(Long id) {
		Post post = repo.findById(id).orElseThrow(() -> new PostNotFoundException("For id=" + id+"post not found"));
		return mapFromPostToDto(post);
	}

	@Override
	public PostDto updatePost(Long id, PostDto postDto) {
		Post post= mapFromDtoToPost(postDto);
		Post x=repo.findById(id).get();
		x.setTitle(post.getTitle());
		x.setContent(post.getContent());
		x.setUsername(post.getUsername());
		x.setCreatedOn(post.getCreatedOn());
		x.setUpdatedOn(post.getUpdatedOn());
		return mapFromPostToDto(repo.save(x));
		//Post y=repo.save(x);
		//return mapFromPostToDto(y);
		
		
		
		
		
	}
		
		

	@Override
	public void deletePostById(Long id) {
	repo.deleteById(id);
		
	}
	
	  private PostDto mapFromPostToDto(Post post) {
	        PostDto postDto = new PostDto();
	        postDto.setId(post.getId());
	        postDto.setTitle(post.getTitle());
	        postDto.setContent(post.getContent());
	        postDto.setUsername(post.getUsername());
	        return postDto;
	    }

	    private Post mapFromDtoToPost(PostDto postDto) {
	        Post post = new Post();
	        post.setTitle(postDto.getTitle());
	        post.setContent(postDto.getContent());
	        post.setCreatedOn(Instant.now());
	        post.setUsername(postDto.getUsername());
	      //post.setUsername(postDto.getUsername());
	        post.setUpdatedOn(Instant.now());
	        return post;
	    }

}
