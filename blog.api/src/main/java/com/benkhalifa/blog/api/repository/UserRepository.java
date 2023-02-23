package com.benkhalifa.blog.api.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.benkhalifa.blog.api.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
	public Optional<User> findByUserName(String userName);
	public User findByPassword(String password);
	public User findUserByEmail(String email);
	public User findByEmailAndPassword(String email,String password);
	
}
