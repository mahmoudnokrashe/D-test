// تحديد اللغة الحالية للمتصفح
var userLanguage = navigator.language || navigator.userLanguage;

// تحديد اتجاه النص وتخصيص عرض الصفحة بناءً على اللغة
if (userLanguage.startsWith("ar")) {
    // اللغة العربية: عرض البيانات المراد إدخالها في الجانب الأيمن
    document.querySelector('.content').style.flexDirection = "row-reverse";
    document.querySelector('aside').style.order = "2";
    document.querySelector('section').style.order = "1";
} else {
    // غير اللغة العربية: عرض البيانات المراد إدخالها في الجانب الأيسر
    document.querySelector('.content').style.flexDirection = "row";
    document.querySelector('aside').style.order = "1";
    document.querySelector('section').style.order = "2";
}

// عرض الصورة الشخصية المحملة عند اختيار الملف
document.getElementById('user-image').addEventListener('change', function(event) {
    var image = document.getElementById('user-image-preview');
    var file = event.target.files[0];
    var reader = new FileReader();
    
    reader.onload = function(e) {
        image.src = e.target.result;
        image.style.display = 'block';
    };
    
    reader.readAsDataURL(file);
});

// تسجيل المستخدم وعرض البيانات في الوقت الفعلي
function registerUser() {
    var fullName = document.getElementById('full-name').value;
    var contactInfo = document.getElementById('contact-info').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var birthdate = document.getElementById('birthdate').value;
    var accountInfo = document.getElementById('account-info').value;
    var subscription = document.getElementById('subscription').value;

    // عرض البيانات في الجانب الأيسر
    var userDetails = "<h2>بيانات المستخدم</h2>";
    userDetails += "<p><strong>الاسم الكامل:</strong> " + fullName + "</p>";
    userDetails += "<p><strong>معلومات الاتصال:</strong> " + contactInfo + "</p>";
    userDetails += "<p><strong>الجنس:</strong> " + gender + "</p>";
    userDetails += "<p><strong>تاريخ الميلاد:</strong> " + birthdate + "</p>";
    userDetails += "<p><strong>معلومات الحساب:</strong> " + accountInfo + "</p>";
    userDetails += "<p><strong>مدة الاشتراك:</strong> " + subscription + "</p>";

    document.getElementById('user-details').innerHTML = userDetails;
}

// الدالة التي تظهر شروط الاستخدام
function showTerms() {
    // يمكنك هنا وضع نص الشروط القانونية
    var termsText = "نص الشروط القانونية...";
    document.getElementById('terms').innerHTML = termsText;
}

// الدالة التي يتم استدعاؤها عند النقر على زر الموافقة
function acceptTerms() {
    var termsCheckbox = document.getElementById('terms-checkbox');
    if (termsCheckbox.checked) {
        // قم بتنفيذ إجراءات الاشتراك/التسجيل بموجب الشروط القانونية
        // يمكنك هنا إرسال البيانات إلى الخادم لمعالجتها وتسجيل المستخدم
        // إذا وافق المستخدم على الشروط
        registerUser(); // اتصال مباشر بوظيفة تسجيل المستخدم بعد الموافقة على الشروط
    } else {
        alert("يرجى قبول الشروط والأحكام أولاً.");
    }
}

// يتم عرض شروط الاستخدام عند تحميل الصفحة
window.onload = function() {
    showTerms();
};
