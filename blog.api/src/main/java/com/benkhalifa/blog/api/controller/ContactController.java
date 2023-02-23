package com.benkhalifa.blog.api.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import com.benkhalifa.blog.api.controller.api.ContactApi;
import com.benkhalifa.blog.api.model.Contact;
import com.benkhalifa.blog.api.service.ContactService;


@CrossOrigin(origins ="*")
@RestController

public class ContactController implements ContactApi {
	@Autowired
    private ContactService service;
	
	
	@Override
		public Contact save(Contact contact) {
			return service.create(contact); 
		}
	

	@Override
	public List<Contact> findAll() {
		return service.getAll();
	}
	

	@Override
	public void delete(Long id) {
	service.deleteContactById(id);
	}
	

	@Override
	public Contact findById(Long id) {
		return service.getContactById(id);
	}
	

	@Override
	public Contact updateFood(Long id, Contact contact) {
		return service.updateContact(id, contact);
	} 
}   
	       
	        
	   
	   
	  
	   
	   
	   
	
	


