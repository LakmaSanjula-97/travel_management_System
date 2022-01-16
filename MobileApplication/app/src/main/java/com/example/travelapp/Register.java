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

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

import java.util.HashMap;

public class Register extends AppCompatActivity {

    private Button register;
    private EditText name, email, nic, password, passenger;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        name = findViewById(R.id.lemail);
        email = findViewById(R.id.email);
        nic = findViewById(R.id.nic);
        password = findViewById(R.id.pass1);
        passenger = findViewById(R.id.passenger);
        register = findViewById(R.id.login);

        register.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                register1();
            }
        });

    }

    private void register1(){

        String t_name = name.getText().toString();
        String t_email = email.getText().toString();
        String t_nic = nic.getText().toString();
        String t_password = password.getText().toString();
        String t_passenger = passenger.getText().toString();

        if(TextUtils.isEmpty(t_email) || TextUtils.isEmpty(t_password) || TextUtils.isEmpty(t_name) || TextUtils.isEmpty(t_nic) || TextUtils.isEmpty(t_passenger)){
            Toast.makeText(this, "Please fill the fields", Toast.LENGTH_SHORT).show();
        }
        else{

            ValidateRegister(t_name, t_email, t_nic, t_password, t_passenger);
        }

    }

    private void ValidateRegister(String t_name, final String t_email, String t_nic, String t_password, String t_passenger) {

        final DatabaseReference RootRef;
        RootRef = FirebaseDatabase.getInstance().getReference();

        RootRef.addListenerForSingleValueEvent(new ValueEventListener() {
            @Override
            public void onDataChange(@NonNull DataSnapshot dataSnapshot) {
                if(!(dataSnapshot.child("Users").child(t_email).exists()))
                {
                    HashMap<String, Object> userdataMap = new HashMap<>();
                    userdataMap.put("email", t_email);
                    userdataMap.put("name", t_name);
                    userdataMap.put("nic", t_nic);
                    userdataMap.put("password", t_password);
                    userdataMap.put("passenger", t_passenger);

                    RootRef.child("Users").child(t_email).updateChildren(userdataMap)
                            .addOnCompleteListener(new OnCompleteListener<Void>() {
                                @Override
                                public void onComplete(@NonNull Task<Void> task) {
                                    if (task.isSuccessful()){
                                        Toast.makeText(Register.this, "Congratulations, your account has been created.", Toast.LENGTH_SHORT).show();

                                        Intent intent = new Intent(Register.this, Login.class);
                                        startActivity(intent);
                                    }
                                    else {
                                        Toast.makeText(Register.this, "register failed", Toast.LENGTH_SHORT).show();
                                    }
                                }
                            });

                }
                else{
                    Toast.makeText(Register.this, "This" + t_email + "already exists.", Toast.LENGTH_SHORT).show();

                    Intent intent = new Intent(Register.this, MainActivity.class);
                    startActivity(intent);
                }
            }

            @Override
            public void onCancelled(@NonNull DatabaseError databaseError) {

            }
        });

    }
}