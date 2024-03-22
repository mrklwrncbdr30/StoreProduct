package com.product.store.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.product.store.Entity.User;
import com.product.store.Repository.UserRepository;

@RestController
@CrossOrigin("http://localhost:5173")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/api/v1/signup")
    public User signUp(@RequestBody User user) {
        return userRepository.save(user);
    }

    @GetMapping("/api/v1/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
