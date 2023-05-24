package com.rfid.gru_uhf;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.AlertDialog;
import android.app.AppOpsManager;
import android.app.KeyguardManager;
import android.app.ProgressDialog;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.net.Uri;
import android.os.AsyncTask;
import android.os.Build;
import android.os.IBinder;
import android.os.PowerManager;
import android.provider.Settings;
import android.util.Log;
import android.widget.Toast;

import com.rscja.deviceapi.RFIDWithUHFUART;
import com.alibaba.fastjson.JSONObject;
import com.rscja.deviceapi.entity.UHFTAGInfo;

import io.dcloud.feature.uniapp.annotation.UniJSMethod;
import io.dcloud.feature.uniapp.bridge.UniJSCallback;
import io.dcloud.feature.uniapp.common.UniModule;


public class UHFModule extends UniModule implements GlobalKeyDownListener {
    String TAG = "UHFModule";
    public RFIDWithUHFUART mReader;

    @UniJSMethod(uiThread = false)
    public void test(UniJSCallback callback) {
//        wakeUpAndUnlock(mUniSDKInstance.getContext());
//        Activity activity = (Activity) mUniSDKInstance.getContext();
//        this._initUHF();

    }

    @UniJSMethod(uiThread = false)
    public void unlockScreen() {
        Utils.unlockScreen(mUniSDKInstance.getContext());
    }

    @UniJSMethod(uiThread = false)
    public void showApp() {
        this._shopApp();
    }

    private void _shopApp() {
        Activity activity = (Activity) mUniSDKInstance.getContext();
        Intent intent = new Intent(Intent.ACTION_MAIN);
        intent.addCategory(Intent.CATEGORY_LAUNCHER);
        intent.setPackage(activity.getApplicationContext().getPackageName());
        activity.startActivity(intent);
    }

    @UniJSMethod(uiThread = false)
    public void openKeyDownService() {
        if (!isOpenOverlay) {
            boolean isAuth = hasOverlayPermission();
            if (isAuth) {
                _openKeyDownService();
            } else {
                requestOverlayPermission();
            }
        }

    }

    /**
     * 判断是否已经开启后台监听键盘服务
     */
    boolean isOpenOverlay = false;

    /**
     * 开启后台监听键盘服务
     */
    public void _openKeyDownService() {
        Activity activity = (Activity) mUniSDKInstance.getContext();
        Intent serviceIntent = new Intent(activity, GlobalKeyDownListenerService.class);
        UHFModule self = this;
        ServiceConnection serviceConnection = new ServiceConnection() {
            @Override
            public void onServiceConnected(ComponentName componentName, IBinder iBinder) {
                GlobalKeyDownListenerService.MyBinder binder = (GlobalKeyDownListenerService.MyBinder) iBinder;
                GlobalKeyDownListenerService service = binder.getService();
                service.showWindow();
                service.registerGlobalKeyDownListener(self);
                isOpenOverlay = true;
                showToast("获取权限成功!进入后台监听按键模式");
            }

            @Override
            public void onServiceDisconnected(ComponentName componentName) {
                isOpenOverlay = false;
                showToast("获取权限失败!后台监听按键模式已关闭");
            }
        };
        activity.bindService(serviceIntent, serviceConnection, Context.BIND_AUTO_CREATE);


    }

    @UniJSMethod(uiThread = false)
    public void readSingleTag(UniJSCallback callback) {
        JSONObject result = this._readSingleTag();
        callback.invoke(result);
    }

    /* 读取单个标签 */
    private JSONObject _readSingleTag() {
        UHFTAGInfo uhftagInfo = mReader.inventorySingleTag();
        JSONObject data = new JSONObject();
        data.put("empty", true);
        if (uhftagInfo != null) {
            data.put("tid", uhftagInfo.getTid());
            data.put("epc", uhftagInfo.getEPC());
            data.put("user", uhftagInfo.getUser());
            data.put("RSSI", uhftagInfo.getRssi());
            data.put("empty", false);
        }
        return data;
    }

    @UniJSMethod(uiThread = false)
    public void openUHF() {
        this._initUHF();
    }

    @UniJSMethod(uiThread = false)
    public boolean closeUHF() {
        return mReader.free();
    }

    private void _initUHF() {
        try {
            mReader = RFIDWithUHFUART.getInstance();
        } catch (Exception ex) {
            Log.i(TAG, ex.getMessage());
            return;
        }

        if (mReader != null) {
            new InitUHFTask(this).execute();
        }

    }

    /**
     * 用户点击时监听
     */
    @Override
    public void onGlobalKeyDown(int keyCode, String action) {
        JSONObject data = new JSONObject();
        data.put("keyCode", keyCode);
        Log.i("AAA", keyCode+"");
        data.put("action", action);
        mUniSDKInstance.fireModuleEvent("keyDown", this, data.getInnerMap());

    }

    /**
     * 初始化UHF
     */
    public class InitUHFTask extends AsyncTask<String, Integer, Boolean> {
        // 打开加载框
        ProgressDialog mypDialog;
        UniModule module;

        InitUHFTask(UniModule module) {
            this.module = module;
        }

        @Override
        protected Boolean doInBackground(String... params) {
            // TODO Auto-generated method stub
            mReader.free();
            return mReader.init();
        }

        @Override
        protected void onPostExecute(Boolean result) {
            super.onPostExecute(result);
            mypDialog.cancel();
            JSONObject data = new JSONObject();
            data.put("error", null);
            if (!result) {
                data.put("error", "RFID init fail");
                Log.i(TAG, "RFID init fail");
                mUniSDKInstance.fireModuleEvent("error", this.module, data.getInnerMap());
            } else {
                mUniSDKInstance.fireModuleEvent("open", this.module, data.getInnerMap());
            }

        }

        @Override
        protected void onPreExecute() {
            // TODO Auto-generated method stub
            super.onPreExecute();

            mypDialog = new ProgressDialog(mWXSDKInstance.getContext());
            mypDialog.setProgressStyle(ProgressDialog.STYLE_SPINNER);
            mypDialog.setMessage("正在初始化UHF");
            mypDialog.setCanceledOnTouchOutside(false);
            mypDialog.show();
        }
    }


    // 获取悬浮窗口权限
    int OVERLAY_REQUEST_CODE = 20001;

    /**
     * 请求用户开启悬浮窗权限
     */
    private void requestOverlayPermission() {
        Activity activity = (Activity) mUniSDKInstance.getContext();
        Context context = mUniSDKInstance.getContext();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M && Build.VERSION.SDK_INT < Build.VERSION_CODES.O) {
            // 安卓6到7的处理方式
            if (!Settings.canDrawOverlays(context)) {
                Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
                        Uri.parse("package:" + activity.getPackageName()));
                activity.startActivityForResult(intent, OVERLAY_REQUEST_CODE);
            }
        } else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O && Build.VERSION.SDK_INT < Build.VERSION_CODES.R) {
            // 安卓8到10的处理方式
            if (!Settings.canDrawOverlays(context)) {
                Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION);
                intent.setData(Uri.parse("package:" + activity.getPackageName()));
                activity.startActivityForResult(intent, OVERLAY_REQUEST_CODE);
            }
        } else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            // 安卓11及以上的处理方式
            if (!Settings.canDrawOverlays(context)) {
                Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION);
                activity.startActivityForResult(intent, OVERLAY_REQUEST_CODE);
            }
        }
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        Activity activity = (Activity) mUniSDKInstance.getContext();
        if (requestCode == OVERLAY_REQUEST_CODE) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M && Settings.canDrawOverlays(mUniSDKInstance.getContext())) {
                // 悬浮窗口权限已被授予
                // 执行相关操作
                _openKeyDownService();


            } else {
                // 悬浮窗口权限被拒绝
                // 提示用户手动授予权限或处理权限被拒绝的情况
                customAlert("悬浮窗权限设置失败!读写器将无法在后台监听!");
            }
        }
    }

    /**
     * 判断是否有悬浮窗口权限
     */
    public boolean hasOverlayPermission() {
        Activity activity = (Activity) mUniSDKInstance.getContext();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M && Build.VERSION.SDK_INT < Build.VERSION_CODES.O) {
            return Settings.canDrawOverlays(mUniSDKInstance.getContext());
        } else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            AppOpsManager appOpsManager = (AppOpsManager) activity.getSystemService(Context.APP_OPS_SERVICE);
            if (appOpsManager != null) {
                int mode = appOpsManager.checkOpNoThrow(AppOpsManager.OPSTR_SYSTEM_ALERT_WINDOW, android.os.Process.myUid(), activity.getPackageName());
                return mode == AppOpsManager.MODE_ALLOWED;
            }
        }
        return true; // 在安卓6以下和安卓12及以上的版本默认返回 true
    }

    public void customAlert(String message) {
        customAlert(message, "警告");
    }

    public void customAlert(String message, String title) {
        AlertDialog.Builder builder = new AlertDialog.Builder(mUniSDKInstance.getContext());
        builder.setTitle(title);  // 设置对话框标题
        builder.setMessage(message);  // 设置对话框内容

        // 设置确认按钮
        builder.setPositiveButton("确定", (dialog, which) -> {
            // 在点击确认按钮后执行的操作
            dialog.dismiss();  // 关闭对话框
        });

        AlertDialog alertDialog = builder.create();  // 创建对话框
        alertDialog.show();  // 显示对话框
    }

    Toast toast;

    public void showToast(String message) {
        if (toast != null) {
            toast.cancel(); // 取消之前的 Toast
        }
        toast = Toast.makeText(mUniSDKInstance.getContext().getApplicationContext(), message, Toast.LENGTH_SHORT);
        toast.show();
    }
}
