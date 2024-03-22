package com.product.store.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.product.store.Entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
}

