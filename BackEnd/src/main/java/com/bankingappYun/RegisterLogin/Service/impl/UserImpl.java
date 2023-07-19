package com.bankingappYun.RegisterLogin.Service.impl;

import com.bankingappYun.RegisterLogin.Dto.UserDTO;
import com.bankingappYun.RegisterLogin.Entity.User;
import com.bankingappYun.RegisterLogin.Repo.UserRepo;
import com.bankingappYun.RegisterLogin.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserImpl implements UserService {
    @Autowired
    private UserRepo userRepo;


    @Override
    public String addUser(UserDTO userDTO) {
        User user = new User(
                userDTO.getUserid(),
                userDTO.getUserName(),
                userDTO.getUserEmail()
        );

        userRepo.save(user);
        return user.getUserName();
    }
}

