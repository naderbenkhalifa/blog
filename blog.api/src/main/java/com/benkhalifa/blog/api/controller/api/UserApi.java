package com.benkhalifa.blog.api.controller.api;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.benkhalifa.blog.api.model.User;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@Api("users")
public interface UserApi {
	@PostMapping(value ="/api/users/create", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	  @ApiOperation(value = "Enregistrer un utilisateur", notes = "Cette methode permet d'enregistrer un utilisateur", response = User.class)
	  @ApiResponses(value = {
	      @ApiResponse(code = 200, message = "L'objet utilisateur crée"),
	      @ApiResponse(code = 400, message = "L'objet utilisateur n'est pas valide")
	  })
	 User save(@RequestBody User user);
	 
		@GetMapping(value = "/api/users/all", produces = MediaType.APPLICATION_JSON_VALUE)
		  @ApiOperation(value = "Renvoi la liste des utilisateurs", notes = "Cette methode permet de chercher et renvoyer la liste des utilisateurs qui existent "
		      + "dans la BDD", responseContainer = "List<User>")
		  @ApiResponses(value = {
		      @ApiResponse(code = 200, message = "La liste des utilisateurs / Une liste vide")
		  })
		  List<User> findAll();
		
			 @GetMapping(value ="/api/users/finduser/{password}" , produces = MediaType.APPLICATION_JSON_VALUE)
			  @ApiOperation(value = "Chercher la liste des utilisateurs par password", notes = "Cette methode permet de Chercher la liste des utilisateurs par password", response = User.class)
			  @ApiResponses(value = {
			      @ApiResponse(code = 200, message = "La liste des utilisateurs /liste vide"),
			     
			  })
			 User findByPassword(@PathVariable("password") String password);
			 
			 @GetMapping(value ="/api/users/find/{email}" , produces = MediaType.APPLICATION_JSON_VALUE)
			  @ApiOperation(value = "Chercher la liste des utilisateurs par email", notes = "Cette methode permet de Chercher la liste des utilisateurs par email", response = User.class)
			  @ApiResponses(value = {
			      @ApiResponse(code = 200, message = "La liste des utilisateurs /liste vide"),
			     
			  })
			 User findByEmail(@PathVariable("email") String email);
			 
			 @DeleteMapping(value = "/api/users/delete/{iduser}")
			  @ApiOperation(value = "Supprimer un utilisateur", notes = "Cette methode permet de supprimer un utilisateur par ID")
			  @ApiResponses(value = {
			      @ApiResponse(code = 200, message = "l'utilisateur a été supprimé")
			  })
			  void delete(@PathVariable("iduser") Long id);
			 
			 @GetMapping(value = "/api/users/get/{iduser}", produces = MediaType.APPLICATION_JSON_VALUE)
			  @ApiOperation(value = "Rechercher un utilisateur par ID", notes = "Cette methode permet de chercher un utilisateur par son ID", response = User.class)
			  @ApiResponses(value = {
			      @ApiResponse(code = 200, message = "L'utilisateur a ete trouve dans la BDD"),
			      @ApiResponse(code = 404, message = "Aucun utilisateur n'existe dans la BDD avec l'ID fourni")
			  })
			  User findById(@PathVariable("iduser") Long id);
			 
			 @GetMapping(value = "/api/users/get/{email}/{password}", produces = MediaType.APPLICATION_JSON_VALUE)
			  @ApiOperation(value = "Rechercher un utilisateur par email et password", notes = "Cette methode permet de chercher un utilisateur par son email et password", response = User.class)
			  @ApiResponses(value = {
			      @ApiResponse(code = 200, message = "L'utilisateur a ete trouve dans la BDD"),
			      @ApiResponse(code = 404, message = "Aucun utilisateur n'existe dans la BDD avec l'ID fourni")
			  })
			  User findByEmailAndPassword(@PathVariable String email,@PathVariable String password);
			 
			 @PostMapping(value = "/users/api/login/create", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
			  @ApiOperation(value = "Enregistrer utilisateurlogin", notes = "Cette methode permet d'enregistrer un utilisateurlogin", response = User.class)
			  @ApiResponses(value = {
			      @ApiResponse(code = 200, message = "L'objet utilisateurlogin crée"),
			      @ApiResponse(code = 400, message = "L'objet utilisateurlogin n'est pas valide")
			  })
			 User addUserLogin (@RequestBody User user) throws Exception ;

			 
	

}

