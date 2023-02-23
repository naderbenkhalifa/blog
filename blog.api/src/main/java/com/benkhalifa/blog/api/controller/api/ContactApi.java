package com.benkhalifa.blog.api.controller.api;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.benkhalifa.blog.api.model.Contact;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;


@Api("contacts")
public interface ContactApi {
	@PostMapping(value ="/api/contacts/create", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	  @ApiOperation(value = "Enregistrer un contact", notes = "Cette methode permet d'enregistrer un contact", response = Contact.class)
	  @ApiResponses(value = {
	      @ApiResponse(code = 200, message = "L'objet contact crée"),
	      @ApiResponse(code = 400, message = "L'objet contact n'est pas valide")
	  })
	 Contact save(@RequestBody Contact contact);
	
	@GetMapping(value = "/api/contacts/all", produces = MediaType.APPLICATION_JSON_VALUE)
	  @ApiOperation(value = "Renvoi la liste des contacts", notes = "Cette methode permet de chercher et renvoyer la liste des contacts qui existent "
	      + "dans la BDD", responseContainer = "List<Contacts>")
	  @ApiResponses(value = {
	      @ApiResponse(code = 200, message = "La liste des contacts / Une liste vide")
	  })
	  List<Contact> findAll();
	
	 @DeleteMapping(value = "/api/contacts/delete/{idcontact}")
	  @ApiOperation(value = "Supprimer un contact", notes = "Cette methode permet de supprimer un contact par ID")
	  @ApiResponses(value = {
	      @ApiResponse(code = 200, message = "contact a été supprimé")
	  })
	  void delete(@PathVariable("idcontact") Long id);
	 
	 @GetMapping(value = "/api/contacts/get/{idcontact}", produces = MediaType.APPLICATION_JSON_VALUE)
	  @ApiOperation(value = "Rechercher un contact par ID", notes = "Cette methode permet de chercher un contact par son ID", response = Contact.class)
	  @ApiResponses(value = {
	      @ApiResponse(code = 200, message = "contact a ete trouve dans la BDD"),
	      @ApiResponse(code = 404, message = "Aucun contact n'existe dans la BDD avec l'ID fourni")
	  })
	  Contact findById(@PathVariable("idcontact") Long id);
	 
	 @PutMapping(value ="/api/contacts/update/{idcontact}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	  @ApiOperation(value = "modifier un contact", notes = "Cette methode permet de modifier un contact", response = Contact.class)
	  @ApiResponses(value = {
	      @ApiResponse(code = 200, message = "L'objet contact a été modifié"),
	      @ApiResponse(code = 400, message = "L'objet contact n'est pas valide")
	  })
	 Contact updateFood(@PathVariable("idcontact") Long id, @RequestBody Contact contact);
	

	 

}
