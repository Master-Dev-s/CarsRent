package com.digitalhouse.carsrent.service;

import com.digitalhouse.carsrent.model.User;
import com.digitalhouse.carsrent.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User createUser(User user) {
        return userRepository.save(user);
    }
}
