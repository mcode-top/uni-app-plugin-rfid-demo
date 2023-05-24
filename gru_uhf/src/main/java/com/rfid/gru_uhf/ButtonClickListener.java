package com.rfid.gru_uhf;

public interface ButtonClickListener {
    void onSingleClick(int keyCode);
    void onDoubleClick(int keyCode);
    void onLongPress(int keyCode);
}