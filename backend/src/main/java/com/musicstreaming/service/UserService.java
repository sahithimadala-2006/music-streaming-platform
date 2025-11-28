package com.musicstreaming.service;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.musicstreaming.model.User;
import com.musicstreaming.repository.UserRepository;
@Service
public class UserService {
     private UserRepository repo;

    public User register(User user) {
        if (repo.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email already registered");
        }
        user.setPassword(encrypt(user.getPassword())); // use BCrypt
        return repo.save(user);
    }

    private String encrypt(String password) {
        return new BCryptPasswordEncoder().encode(password);
    }
}