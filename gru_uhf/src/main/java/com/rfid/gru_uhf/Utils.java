package com.rfid.gru_uhf;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.KeyguardManager;
import android.content.Context;
import android.os.Build;
import android.os.PowerManager;
import android.view.WindowManager;

public class Utils {
    /**
     * 解锁屏幕
     */
    public static void unlockScreen(Context context) {
        Activity activity = (Activity) context;
        KeyguardManager keyguardManager = (KeyguardManager) context.getSystemService(Context.KEYGUARD_SERVICE);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O_MR1) {
            // Android 8.0及以上版本
            if (keyguardManager.isDeviceSecure()) {
                keyguardManager.requestDismissKeyguard(activity, null);
            }
        } else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            // Android 8.0版本
            if (keyguardManager.isDeviceSecure()) {
                keyguardManager.requestDismissKeyguard(activity, null);
            } else {
                activity.getWindow().addFlags(WindowManager.LayoutParams.FLAG_SHOW_WHEN_LOCKED
                        | WindowManager.LayoutParams.FLAG_DISMISS_KEYGUARD);
                PowerManager powerManager = (PowerManager) context.getSystemService(Context.POWER_SERVICE);
                @SuppressLint("InvalidWakeLockTag") PowerManager.WakeLock wakeLock = powerManager.newWakeLock(PowerManager.FULL_WAKE_LOCK | PowerManager.ACQUIRE_CAUSES_WAKEUP, "TAG");
                wakeLock.acquire(500);
                wakeLock.release();
            }
        } else {
            // Android 6.0及以下版本

            activity.getWindow().addFlags(WindowManager.LayoutParams.FLAG_SHOW_WHEN_LOCKED
                    | WindowManager.LayoutParams.FLAG_DISMISS_KEYGUARD
                    | WindowManager.LayoutParams.FLAG_TURN_SCREEN_ON);
        }
    }

    /**
     * 检查屏幕是否亮着
     */
    public static boolean isLightScreen(Context context) {
        Activity activity = (Activity) context;
        PowerManager powerManager = (PowerManager) activity.getSystemService(Context.POWER_SERVICE);
        boolean isScreenOn;

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT_WATCH) {
            isScreenOn = powerManager.isInteractive();
        } else {
            isScreenOn = powerManager.isScreenOn();
        }

        if (isScreenOn) {
            return true;
            // 屏幕是亮着的状态
        } else {
            return false;
            // 屏幕是熄灭的状态
        }

    }
}
