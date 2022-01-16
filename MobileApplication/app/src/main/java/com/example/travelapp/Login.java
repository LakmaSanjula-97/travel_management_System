package com.example.travelapp;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.example.travelapp.Model.Users;
import com.example.travelapp.Prevalent.Prevalant;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

public class Login extends AppCompatActivity {

    private Button register, login;
    private EditText email, password;

    private String parentDbName = "Users";


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        register = findViewById(R.id.register);
        email = findViewById(R.id.lemail);
        password = findViewById(R.id.password);
        login = findViewById(R.id.login);

        login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                LoginUser();
            }
        });



        register.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(Login.this, Register.class));
            }
        });

    }

    private void LoginUser() {

        String t_email = email.getText().toString();
        String t_password = password.getText().toString();

        if(TextUtils.isEmpty(t_email) || TextUtils.isEmpty(t_password)){
            Toast.makeText(this, "Please fill the fields", Toast.LENGTH_SHORT).show();
        }
        else{

            LoginValidation(t_email, t_password);


        }
    }

    private void LoginValidation(String t_email, String t_password) {

        final DatabaseReference RootRef;
        RootRef = FirebaseDatabase.getInstance().getReference();

        RootRef.addListenerForSingleValueEvent(new ValueEventListener() {
            @Override
            public void onDataChange(@NonNull DataSnapshot datasnapshot) {

                if(datasnapshot.child(parentDbName).child(t_email).exists())
                {
                    Users userData = datasnapshot.child(parentDbName).child(t_email).getValue(Users.class);

                    if(userData.getEmail().equals(t_email))
                    {
                        if(userData.getPassword().equals(t_password))
                        {
                            Toast.makeText(Login.this, "Logged in successfully", Toast.LENGTH_SHORT).show();
                            Intent intent = new Intent(Login.this, WelcomePage.class);
                            startActivity(intent);

                            Prevalant.currentOnlineUser = userData;
                        }
                        else{
                            Toast.makeText(Login.this, "email or password incorrect", Toast.LENGTH_SHORT).show();
                        }
                    }
                }
                else {
                    Toast.makeText(Login.this, "Account with this "+t_email+ " email do not exist", Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onCancelled(@NonNull DatabaseError error) {

            }
        });
    }
}