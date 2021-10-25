package com.example.ch04_01;

import android.graphics.Bitmap;
import android.graphics.drawable.BitmapDrawable;
import android.os.Bundle;
import android.os.PersistableBundle;
import android.widget.ImageView;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import java.util.ArrayList;
import java.util.List;

// 继承AppCompatActivity 相当于间接继承了Activity类
public class NewActivity extends AppCompatActivity {
    // 必须重写Activity方法

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState, @Nullable PersistableBundle persistentState) {
        super.onCreate(savedInstanceState, persistentState);
        setContentView(R.layout.activity_new);

//        ImageView img_sp = findViewById(R.id.img_sp);
//        ImageView img_px  = findViewById(R.id.img_px);
//        ImageView img_pt = findViewById(R.id.img_pt);
//        ImageView  img_mm  = findViewById(R.id.img_mm);
//        ImageView img_in = findViewById(R.id.img_in);
        ImageView img_dp  = findViewById(R.id.img_dp);

        List<ImageView> list = new ArrayList<>();
        list.add(img_dp);
//        list.add(img_in);
//        list.add(img_mm);
//        list.add(img_pt);
//        list.add(img_px);
//        list.add(img_sp);
        String [] names = {"dp", "in", "mm", "pt", "px", "sp"};

        int i = 0;
        for (ImageView imageView : list) {
            BitmapDrawable drawable = (BitmapDrawable) imageView.getDrawable();
            if (drawable != null) {
                Bitmap bitmap = drawable.getBitmap();
                System.out.println(names[i++] + ":" + bitmap.getWidth() * (1.0) / imageView.getWidth() );

            }
        }

    }
}
