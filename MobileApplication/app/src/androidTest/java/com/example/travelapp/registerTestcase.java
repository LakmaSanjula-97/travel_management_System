package com.example.travelapp;

import android.view.View;

import androidx.test.rule.ActivityTestRule;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;

public class registerTestcase {

    @Rule
    public ActivityTestRule<Register> registerActivityTestRule = new ActivityTestRule<Register>(Register.class);
    private Register registerActivity = null;

    @Before
    public void setUp() throws Exception {
        registerActivity = registerActivityTestRule.getActivity();

    }

    @Test
    public void testLaunch(){
        View view = registerActivity.findViewById(R.id.email);
        Assert.assertNotNull(view);

    }

    @Test
    public void testLaunch1(){
        View view = registerActivity.findViewById(R.id.nic);
        Assert.assertNotNull(view);

    }

    @Test
    public void testLaunch2(){
        View view = registerActivity.findViewById(R.id.passenger);
        Assert.assertNotNull(view);

    }

    @After
    public void tearDown() throws Exception {
        registerActivity = null ;

    }


}
