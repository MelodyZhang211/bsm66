package com.bankingappYun.RegisterLogin.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="user")
public class User {

    @Id
    @Column(name="user_id",length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int userid;

    @Column(name="user_Name",length = 225)
    private String userName;

    @Column(name="user_Email",length = 225)
    private String userEmail;

    public User(int userid, String userName, String userEmail) {
        this.userid = userid;
        this.userName = userName;
        this.userEmail = userEmail;
    }

    public User() {
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    @Override
    public String toString() {
        return "User{" +
                "userid=" + userid +
                ", userName='" + userName + '\'' +
                ", userEmail='" + userEmail + '\'' +
                '}';
    }
}
