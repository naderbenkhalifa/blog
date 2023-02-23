package com.benkhalifa.blog.api.service;

import java.util.List;


import com.benkhalifa.blog.api.model.Contact;

public interface ContactService {
	
		 public List<Contact> getAll();
		 public Contact create(Contact contact);
		 public Contact  getContactById(Long id);
		 public Contact  updateContact(Long id,Contact contact);
		 public void deleteContactById(Long id);		
		 

}
