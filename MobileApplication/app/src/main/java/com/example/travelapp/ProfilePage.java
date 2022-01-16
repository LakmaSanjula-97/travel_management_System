package com.example.travelapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import com.example.travelapp.Prevalent.Prevalant;

public class ProfilePage extends AppCompatActivity {

    private Button logout;
    private TextView name, email, nic, type;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_profile_page);

        logout = findViewById(R.id.logout);
        name = findViewById(R.id.uname);
        email = findViewById(R.id.uemail);
        nic = findViewById(R.id.unic);
        type = findViewById(R.id.type);

        name.setText(Prevalant.currentOnlineUser.getName());
        email.setText(Prevalant.currentOnlineUser.getEmail());
        nic.setText(Prevalant.currentOnlineUser.getNic());
        type.setText(Prevalant.currentOnlineUser.getPassenger());


        logout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(ProfilePage.this , Login.class));
            }
        });
    }
}