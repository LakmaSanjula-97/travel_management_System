package com.example.travelapp.ViewHolder;

import android.view.View;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.travelapp.Interface.ItemClickListner;
import com.example.travelapp.R;

public class TimtableView extends RecyclerView.ViewHolder implements View.OnClickListener
{
    public TextView troute, tfrom, tto, stimes, endtime;
    public ItemClickListner listner;

    public TimtableView(@NonNull View itemView) {
        super(itemView);

        troute = (TextView) itemView.findViewById(R.id.troute);
        tfrom = (TextView) itemView.findViewById(R.id.tfrom);
        tto = (TextView) itemView.findViewById(R.id.tto);
        stimes = (TextView) itemView.findViewById(R.id.stimes);
        endtime = (TextView) itemView.findViewById(R.id.endtime);

    }

    public void setItemClickListner(ItemClickListner listner){
        this.listner = listner;
    }

    @Override
    public void onClick(View view) {

       listner.onClick(view, getAdapterPosition(), false);

    }
}
