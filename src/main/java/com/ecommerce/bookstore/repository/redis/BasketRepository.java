package com.ecommerce.bookstore.repository.redis;

import com.ecommerce.bookstore.entity.Basket;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BasketRepository extends CrudRepository<Basket, String> {
}