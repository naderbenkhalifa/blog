package com.benkhalifa.blog.api.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.benkhalifa.blog.api.model.Contact;

import com.benkhalifa.blog.api.repository.ContactRepository;
import com.benkhalifa.blog.api.service.ContactService;

@Service
public class ContactServiceImpl implements ContactService {
	
	@Autowired
	private ContactRepository repo;

	@Override
	public List<Contact> getAll() {
		
		return repo.findAll();
	}

	@Override
	public Contact create(Contact contact) {
		
		return repo.save(contact);
	}

	@Override
	public Contact getContactById(Long id) {
		
		return repo.findById(id).get();
	}

	@Override
	public Contact updateContact(Long id, Contact contact) {
		
		Contact x=repo.findById(id).get();
		x.setName(contact.getName());
		x.setEmail(contact.getEmail());
		x.setPhone(contact.getPhone());
		x.setSubject(contact.getSubject());
		x.setMessage(contact.getMessage());
		return repo.save(x);
	}

	@Override
	public void deleteContactById(Long id) {
		repo.deleteById(id);
		
	}

}
