package com.bankingappYun.RegisterLogin.UserController;

import com.bankingappYun.RegisterLogin.Dto.UserDTO;
import com.bankingappYun.RegisterLogin.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("api/v1/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping(path ="/save")
    public String saveUser(@RequestBody UserDTO userDTO)
    {
        System.out.println("Called saveUser");
        String id = userService.addUser(userDTO);
        return id;
    }

    @GetMapping(path = "/test")
    public String test(){
        return "hi";
    }
}
