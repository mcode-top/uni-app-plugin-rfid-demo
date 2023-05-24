package com.rfid.gru_uhf;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.util.Log;
import android.view.KeyEvent;
import android.view.View;

public class MonitorView extends View {
    private static final String LOG_TAG = "MonitorView";
    public MonitorView(Context context) {
        super(context);
    }
    @Override
    public boolean dispatchKeyEvent(KeyEvent event) {
        return super.dispatchKeyEvent(event);
    }
}