package com.ecommerce.bookstore.service;
import java.util.List;
import com.ecommerce.bookstore.model.TypeResponse;

public interface TypeService {
    List<TypeResponse> getAllTypes();
}