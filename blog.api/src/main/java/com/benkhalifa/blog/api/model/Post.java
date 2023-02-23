package com.benkhalifa.blog.api.model;

import java.time.Instant;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="posts")
public class Post {
		@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	  
	    @Column
	    private String title;
	   
	    @Column
	    private String content;
	    
	    @Column
	    private Instant createdOn;
	    
	    @Column
	    private Instant updatedOn;
	    
	    @Column
	    private String username;

}
