package com.ecommerce.bookstore.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.redis.repository.configuration.EnableRedisRepositories;

@Configuration
@EnableJpaRepositories(basePackages = "com.ecommerce.bookstore.repository.jpa")
@EnableRedisRepositories(basePackages = "com.ecommerce.bookstore.repository.redis")
public class RepositoryConfig {
}