package com.bankingappYun.RegisterLogin.Repo;

import com.bankingappYun.RegisterLogin.Dto.UserDTO;
import com.bankingappYun.RegisterLogin.Entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface UserRepo extends JpaRepository<User,Integer> {


    }

