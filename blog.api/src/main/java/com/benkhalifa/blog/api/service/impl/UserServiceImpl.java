package com.benkhalifa.blog.api.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.benkhalifa.blog.api.model.User;
import com.benkhalifa.blog.api.repository.UserRepository;
import com.benkhalifa.blog.api.service.UserService;


@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private  UserRepository repo;
	
	@Override
	public User save(User user) {
		return repo.save(user);
	}

	@Override
	public List<User> getAll() {
		return repo.findAll();
	}

	

	@Override
	public User getUserByPassword(String password) {
		return repo.findByPassword(password);
	}

	@Override
	public User getUserByEmail(String email) {
		return repo.findUserByEmail(email);
	}


	

	@Override
	public User getUserByEmailAndPassword(String email, String password) {
		return repo.findByEmailAndPassword(email, password);
	}
	
	@Override
	public void deleteUserById(Long id) {
		 repo.deleteById(id);
	}
	
	@Override
	public User getUserById(Long id) {
		return repo.findById(id).get();
	}
	
	
	//@Override
	 //public User addUserLogin(User user) {
		//return repo.save(user);
	//}
}
	
	
	
