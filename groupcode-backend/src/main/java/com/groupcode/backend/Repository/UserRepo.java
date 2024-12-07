package com.groupcode.backend.Repository;

import com.groupcode.backend.Model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepo extends MongoRepository<User,Integer> {
}
