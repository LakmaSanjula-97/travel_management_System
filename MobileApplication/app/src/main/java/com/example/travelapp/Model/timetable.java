package com.example.travelapp.Model;

public class timetable {
    private String route, from, to, stime, etime;

    public timetable(){

    }

    public timetable(String route, String from, String to, String stime, String etime) {
        this.route = route;
        this.from = from;
        this.to = to;
        this.stime = stime;
        this.etime = etime;
    }

    public String getRoute() {
        return route;
    }

    public void setRoute(String route) {
        this.route = route;
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public String getStime() {
        return stime;
    }

    public void setStime(String stime) {
        this.stime = stime;
    }

    public String getEtime() {
        return etime;
    }

    public void setEtime(String etime) {
        this.etime = etime;
    }
}
