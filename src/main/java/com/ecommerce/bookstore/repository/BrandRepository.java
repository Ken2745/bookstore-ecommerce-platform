package com.ecommerce.bookstore.repository;

import com.ecommerce.bookstore.entity.Brand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface BrandRepository extends JpaRepository<Brand, Integer> {

}
