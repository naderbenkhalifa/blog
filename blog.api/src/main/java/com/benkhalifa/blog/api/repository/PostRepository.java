package com.benkhalifa.blog.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.benkhalifa.blog.api.model.Post;


@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

}
