package com.benkhalifa.blog.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.benkhalifa.blog.api.model.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long>  {

}
