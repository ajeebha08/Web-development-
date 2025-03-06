package com.example.firstaidguideapp;

import android.os.Bundle;
import android.view.View;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    TextView poisoningGuide, bleedingGuide, chokingGuide, feverGuide, electricShockGuide;
    TextView poisoningToggle, bleedingToggle, chokingToggle, feverToggle, electricShockToggle;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Find Views
        poisoningGuide = findViewById(R.id.poisoningGuide);
        bleedingGuide = findViewById(R.id.bleedingGuide);
        chokingGuide = findViewById(R.id.chokingGuide);
        feverGuide = findViewById(R.id.feverGuide);
        electricShockGuide = findViewById(R.id.electricShockGuide);

        poisoningToggle = findViewById(R.id.poisoningToggle);
        bleedingToggle = findViewById(R.id.bleedingToggle);
        chokingToggle = findViewById(R.id.chokingToggle);
        feverToggle = findViewById(R.id.feverToggle);
        electricShockToggle = findViewById(R.id.electricShockToggle);

        // Toggle Visibility for each section
        setupToggle(poisoningToggle, poisoningGuide);
        setupToggle(bleedingToggle, bleedingGuide);
        setupToggle(chokingToggle, chokingGuide);
        setupToggle(feverToggle, feverGuide);
        setupToggle(electricShockToggle, electricShockGuide);
    }

    private void setupToggle(TextView toggleButton, TextView guide) {
        toggleButton.setOnClickListener(v -> guide.setVisibility(
                guide.getVisibility() == View.VISIBLE ? View.GONE : View.VISIBLE
        ));
    }
}
