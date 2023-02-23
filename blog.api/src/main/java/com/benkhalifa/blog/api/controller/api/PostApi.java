package com.benkhalifa.blog.api.controller.api;

import java.util.List;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.benkhalifa.blog.api.dto.PostDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@Api("posts")
public interface PostApi {
	@PostMapping(value ="/api/posts/create", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	  @ApiOperation(value = "Enregistrer un post", notes = "Cette methode permet d'enregistrer un post", response = PostDto.class)
	  @ApiResponses(value = {
	      @ApiResponse(code = 200, message = "L'objet post crée"),
	      @ApiResponse(code = 400, message = "L'objet post n'est pas valide")
	  })
	 PostDto save(@RequestBody PostDto postDto);
	
	@GetMapping(value = "/api/posts/all", produces = MediaType.APPLICATION_JSON_VALUE)
	  @ApiOperation(value = "Renvoi la liste des posts", notes = "Cette methode permet de chercher et renvoyer la liste des posts qui existent "
	      + "dans la BDD", responseContainer = "List<PostDto>")
	  @ApiResponses(value = {
	      @ApiResponse(code = 200, message = "La liste des posts / Une liste vide")
	  })
	  List<PostDto> findAll();
	
	 @DeleteMapping(value = "/api/posts/delete/{idpost}")
	  @ApiOperation(value = "Supprimer un post", notes = "Cette methode permet de supprimer un post par ID")
	  @ApiResponses(value = {
	      @ApiResponse(code = 200, message = "post a été supprimé")
	  })
	  void delete(@PathVariable("idpost") Long id);
	 
	 @GetMapping(value = "/api/posts/get/{idpost}", produces = MediaType.APPLICATION_JSON_VALUE)
	  @ApiOperation(value = "Rechercher un post par ID", notes = "Cette methode permet de chercher un post par son ID", response = PostDto.class)
	  @ApiResponses(value = {
	      @ApiResponse(code = 200, message = "post a ete trouve dans la BDD"),
	      @ApiResponse(code = 404, message = "Aucun post n'existe dans la BDD avec l'ID fourni")
	  })
	  PostDto findById(@PathVariable("idpost") Long id);
	 
	 @PutMapping(value ="/api/posts/update/{idpost}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	  @ApiOperation(value = "modifier un aliment", notes = "Cette methode permet de modifier un post", response = PostDto.class)
	  @ApiResponses(value = {
	      @ApiResponse(code = 200, message = "L'objet post été modifié"),
	      @ApiResponse(code = 400, message = "L'objet post n'est pas valide")
	  })
	 PostDto update(@PathVariable("idpost") Long id, @RequestBody PostDto PostDto);
	

}
