package com.example.travelapp;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.firebase.ui.database.FirebaseRecyclerAdapter;
import com.firebase.ui.database.FirebaseRecyclerOptions;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.example.travelapp.ViewHolder.TimtableView;
import com.example.travelapp.Model.timetable;

public class Timetable extends AppCompatActivity {

    private DatabaseReference TimetableRef;
    private RecyclerView recyclerView;
    RecyclerView.LayoutManager layoutManager;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_timetable);

        TimetableRef = FirebaseDatabase.getInstance().getReference().child("Timetable");

        recyclerView = findViewById(R.id.recycle);
        layoutManager = new LinearLayoutManager(this);
        recyclerView.setLayoutManager(layoutManager);

    }

    @Override
    protected void onStart() {
        super.onStart();
        FirebaseRecyclerOptions<timetable> options =
                new FirebaseRecyclerOptions.Builder<timetable>()
                .setQuery(TimetableRef, timetable.class)
                .build();

        FirebaseRecyclerAdapter<timetable, TimtableView> adapter = new FirebaseRecyclerAdapter<timetable, TimtableView>(options) {
            @Override
            protected void onBindViewHolder(@NonNull TimtableView holder, int i, @NonNull timetable model) {

                holder.troute.setText(model.getRoute());
                holder.tfrom.setText(model.getFrom());
                holder.tto.setText(model.getTo());
                holder.stimes.setText(model.getStime());
                holder.endtime.setText(model.getEtime());
            }

            @NonNull
            @Override
            public TimtableView onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {

                View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.timetable_layout, parent, false);
                TimtableView holder = new TimtableView(view);
                return holder;

            }
        };

        recyclerView.setAdapter(adapter);
        adapter.startListening();


    }
}