package com.groupcode.backend.Controller;

import com.groupcode.backend.Model.User;
import com.groupcode.backend.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @Autowired
    UserRepo userRepo;

    @PostMapping("/addUser")
    public void addUser(@RequestBody User user){
        userRepo.save(user);
    }
}
