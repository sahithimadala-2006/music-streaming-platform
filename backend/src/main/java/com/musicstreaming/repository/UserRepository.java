package com.musicstreaming.repository;

import com.musicstreaming.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // ✅ Check if an email is already registered
    boolean existsByEmail(String email);

    // ✅ Find user by email for login
    Optional<User> findByEmail(String email);
}