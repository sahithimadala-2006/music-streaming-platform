package com.musicstreaming.controller;

import com.musicstreaming.dto.LoginRequest;
import com.musicstreaming.dto.SignupRequest;
import com.musicstreaming.model.User;
import com.musicstreaming.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private final UserRepository userRepo;
    private final BCryptPasswordEncoder passwordEncoder;

    public UserController(UserRepository userRepo, BCryptPasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }

    // ✅ Signup (no language)
    @PostMapping("/signup")
    public ResponseEntity<?> signup(@Valid @RequestBody SignupRequest signupRequest) {
        if (userRepo.existsByEmail(signupRequest.getEmail())) {
            return ResponseEntity.badRequest().body(Map.of("message", "Email already registered"));
        }

        User user = new User();
        user.setUsername(signupRequest.getUsername());
        user.setEmail(signupRequest.getEmail());
        user.setPassword(passwordEncoder.encode(signupRequest.getPassword()));

        User savedUser = userRepo.save(user);
        return ResponseEntity.ok(Map.of(
                "username", savedUser.getUsername(),
                "message", "Signup successful"));
    }

    // ✅ Login (returns stored language if any)
    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest loginRequest) {
        Optional<User> userOpt = userRepo.findByEmail(loginRequest.getEmail());

        if (userOpt.isEmpty()) {
            return ResponseEntity.status(401).body(Map.of("message", "User not found"));
        }

        User user = userOpt.get();
        boolean passwordMatch = passwordEncoder.matches(loginRequest.getPassword(), user.getPassword());

        if (!passwordMatch) {
            return ResponseEntity.status(401).body(Map.of("message", "Invalid credentials"));
        }

        return ResponseEntity.ok(Map.of(
                "username", user.getUsername(),
                "language", user.getLanguage(), // may be null
                "message", "Login successful"));
    }

    // ✅ Update language after login
    @PutMapping("/language")
    public ResponseEntity<?> updateLanguage(@RequestBody Map<String, String> payload) {
        String email = payload.get("email");
        String language = payload.get("language");

        if (email == null || language == null) {
            return ResponseEntity.badRequest().body(Map.of("message", "Email and language are required"));
        }

        Optional<User> userOpt = userRepo.findByEmail(email);
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(404).body(Map.of("message", "User not found"));
        }

        User user = userOpt.get();
        user.setLanguage(language);
        userRepo.save(user);

        return ResponseEntity.ok(Map.of("message", "Language updated successfully"));
    }
}