package com.rfid.gru_uhf;

import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.graphics.PixelFormat;
import android.os.Binder;
import android.os.Build;
import android.os.Handler;
import android.os.IBinder;
import android.util.Log;
import android.view.KeyEvent;
import android.view.View;
import android.view.WindowManager;


public class GlobalKeyDownListenerService extends Service implements ButtonClickListener {
    private IBinder binder = (IBinder) new MyBinder();

    public class MyBinder extends Binder {
        GlobalKeyDownListenerService getService() {
            return GlobalKeyDownListenerService.this;
        }
    }

    @Override
    public IBinder onBind(Intent intent) {
        return binder;
    }

    @Override
    public void onCreate() {
        super.onCreate();

    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        return super.onStartCommand(intent, flags, startId);
    }


    public static WindowManager mWindowManager;
    public static MonitorView mMonitorView;

    void createMonitorView() {
        mMonitorView = new MonitorView(this);
        // 做一个按键监听
        View.OnKeyListener listener = (view, keyCode, keyEvent) -> {
            detectButtonClick(keyCode, keyEvent, this);
            return false;
        };
        mMonitorView.setOnKeyListener(listener);
    }

    GlobalKeyDownListener globalKeyDownListener;

    void registerGlobalKeyDownListener(GlobalKeyDownListener listener) {
        // 将全局监听暴露出来
        globalKeyDownListener = listener;
    }

    /**
     * 显示浮动窗
     */
    public void showWindow() {
        if (mWindowManager == null) {
            mWindowManager = (WindowManager) getSystemService(Context.WINDOW_SERVICE);
            createMonitorView();
        }
        WindowManager.LayoutParams params = new WindowManager.LayoutParams(
                1, 1, //Must be at least 1x1
                WindowManager.LayoutParams.TYPE_SYSTEM_ALERT,
                WindowManager.LayoutParams.FLAG_NOT_TOUCHABLE,
                //Don't know if this is a safe default
                PixelFormat.TRANSLUCENT);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {//8.0+,不设置这个flag可能会报错
            params.type = WindowManager.LayoutParams.TYPE_APPLICATION_OVERLAY;
        } else {
            params.type = WindowManager.LayoutParams.TYPE_PHONE;
        }
        params.format = PixelFormat.RGB_565;//设置背景图片
        //Don't set the preview visibility to GONE or INVISIBLE
        mWindowManager.addView(mMonitorView, params);
    }

    public static void hideWindow() {
        if (null != mWindowManager) {
            mWindowManager.removeView(mMonitorView);
        }
    }

    public static void addWindow() {
        if (null != mWindowManager) {
            WindowManager.LayoutParams params = new WindowManager.LayoutParams(
                    1, 1,
                    WindowManager.LayoutParams.TYPE_SYSTEM_ALERT,
                    WindowManager.LayoutParams.FLAG_NOT_TOUCHABLE,
                    PixelFormat.TRANSLUCENT);
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {//8.0+,不设置这个flag可能会报错
                params.type = WindowManager.LayoutParams.TYPE_APPLICATION_OVERLAY;
            } else {
                params.type = WindowManager.LayoutParams.TYPE_PHONE;
            }
            params.format = PixelFormat.RGBA_4444;//设置背景图片
            mWindowManager.addView(mMonitorView, params);
        }
    }

    private static final long DOUBLE_CLICK_TIME_THRESHOLD = 100; // 双击时间阈值，单位：毫秒
    private static final long LONG_PRESS_TIME_THRESHOLD = 500; // 长按时间阈值，单位：毫秒

    private long lastClickTime = 0;
    private boolean longPressDetected = false;
    private int clickCount = 0;

    /**
     * 判断按下动作 单击 双击 长按
     */
    public void detectButtonClick(int keyCode, KeyEvent event, ButtonClickListener listener) {
        if (event.getAction() == KeyEvent.ACTION_DOWN) {
            long currentTime = System.currentTimeMillis();
            if (keyCode == KeyEvent.KEYCODE_VOLUME_UP) {
                if (currentTime - lastClickTime < DOUBLE_CLICK_TIME_THRESHOLD) {
                    // 双击事件
                    listener.onDoubleClick(keyCode);
                    clickCount = 0;
                } else {
                    clickCount++;
                    if (clickCount > 1) {
                        // 连击事件
                        clickCount = 0;
                    }
                }
                lastClickTime = currentTime;
                longPressDetected = false;
            }
            if (!longPressDetected) {
                longPressDetected = true;
                Handler handler = new Handler();
                handler.postDelayed(() -> {
                    if (longPressDetected) {
                        // 长按事件
                        listener.onLongPress(keyCode);
                    }
                }, LONG_PRESS_TIME_THRESHOLD);
            }
        } else if (event.getAction() == KeyEvent.ACTION_UP) {
            longPressDetected = false;
            if (clickCount == 0) {
                // 单击事件
                listener.onSingleClick(keyCode);
            }
        }
    }

    @Override
    public void onSingleClick(int code) {
        globalKeyDownListener.onGlobalKeyDown(code, "Single");
    }

    @Override
    public void onDoubleClick(int code) {
        globalKeyDownListener.onGlobalKeyDown(code, "Double");
    }

    @Override
    public void onLongPress(int code) {
        globalKeyDownListener.onGlobalKeyDown(code, "LongPress");
    }

}