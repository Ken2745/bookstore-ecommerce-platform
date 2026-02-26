package com.ecommerce.bookstore.repository;

import com.ecommerce.bookstore.entity.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface TypeRepository extends JpaRepository<Type, Integer>{

}
