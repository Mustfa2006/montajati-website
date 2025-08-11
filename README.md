# منتجاتي - تطبيق الويب
# Montajati Web Application

## 📦 حزمة النشر الجاهزة

هذا المجلد يحتوي على تطبيق منتجاتي مبني للويب وجاهز للنشر.

## 🚀 طرق النشر

### 1. استضافة ثابتة (Static Hosting)
يمكن نشر هذا التطبيق على أي خدمة استضافة ثابتة:

- **Netlify**: اسحب وأفلت المجلد
- **Vercel**: اسحب وأفلت المجلد  
- **GitHub Pages**: ارفع الملفات إلى repository
- **Firebase Hosting**: استخدم `firebase deploy`
- **Apache/Nginx**: انسخ الملفات إلى مجلد الويب

### 2. إعدادات الخادم المطلوبة

#### Apache (.htaccess موجود)
- تأكد من تفعيل mod_rewrite
- تأكد من تفعيل mod_deflate للضغط
- تأكد من تفعيل mod_expires للتخزين المؤقت

#### Nginx
```nginx
location / {
    try_files $uri $uri/ /index.html;
    
    # ضغط الملفات
    gzip on;
    gzip_types text/css application/javascript application/json application/wasm;
    
    # تخزين مؤقت
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|wasm)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## 🔧 المتطلبات

- **HTTPS**: مطلوب لـ Service Workers و PWA
- **إعادة التوجيه**: جميع المسارات يجب أن تعيد index.html
- **CORS**: مضبوط للاتصال بالـ Backend

## 📱 الميزات المدعومة

- ✅ تطبيق ويب تقدمي (PWA)
- ✅ يعمل بدون اتصال (Service Worker)
- ✅ قابل للتثبيت على الأجهزة
- ✅ محسّن للهواتف والحاسوب
- ✅ ضغط الملفات وتحسين الأداء

## 🌐 الروابط المهمة

- **Backend API**: https://montajati-backend.onrender.com
- **Supabase**: مضبوط في التطبيق
- **Firebase**: مضبوط للإشعارات

## 📊 إحصائيات البناء

- **حجم التطبيق**: محسّن ومضغوط
- **الخطوط**: مُحسّنة بـ Tree Shaking (توفير 95%+)
- **الصور**: محسّنة للويب
- **JavaScript**: مضغوط ومُحسّن

## 🔒 الأمان

- Content Security Policy مُفعّل
- X-Frame-Options للحماية من Clickjacking  
- X-XSS-Protection مُفعّل
- إخفاء معلومات الخادم

## 📞 الدعم

للدعم التقني أو الاستفسارات، تواصل مع فريق منتجاتي.

---
تم البناء بتاريخ: $(Get-Date)
إصدار Flutter: 3.32.6
