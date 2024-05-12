// ملف language.js

// دالة لتغيير اللغة
function changeLanguage(language) {
    // تقوم بتعديل النصوص بناءً على اللغة المحددة
    if (language === 'ar') {
        document.getElementById('greeting').innerText = 'مرحبا';
        document.getElementById('submit-button').innerText = 'تأكيد';
        // قم بتعديل المزيد من العناصر حسب الحاجة
    } else if (language === 'en') {
        document.getElementById('greeting').innerText = 'Hello';
        document.getElementById('submit-button').innerText = 'Submit';
        // قم بتعديل المزيد من العناصر حسب الحاجة
    }
}

