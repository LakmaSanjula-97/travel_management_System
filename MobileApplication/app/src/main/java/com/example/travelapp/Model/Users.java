package com.example.travelapp.Model;

public class Users {

    private String email, name, nic, password, passenger;

    public Users()
    {

    }

    public Users(String email, String name, String nic, String password, String passenger) {
        this.email = email;
        this.name = name;
        this.nic = nic;
        this.passenger = passenger;

        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPassenger() {
        return passenger;
    }

    public void setPassenger(String passenger) {
        this.passenger = passenger;
    }
}
