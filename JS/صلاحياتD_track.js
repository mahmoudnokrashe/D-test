// صلاحيات العملاء العاديين
const customerPermissions = {
    accessPages: [
        'الصفحة الرئيسية',
        'صفحة البحث ونتائج البحث',
        'تفاصيل العروض',
        'صفحة التتبع',
        'صفحة الحساب الشخصي',
        'صفحة الدعم',
        'صفحة تسجيل الدخول/التسجيل',
        'صفحة الشروط والسياسات'
    ],
    availableFunctions: [
        'البحث عن عروض',
        'تتبع الشحنات',
        'إدارة الحساب والطلبات',
        'طلب الدعم'
    ]
};

// صلاحيات المندوبين
const courierPermissions = {
    accessPages: [
        'صفحة تسجيل الدخول/التسجيل',
        'صفحة الحساب الشخصي',
        'صفحة تفاصيل العروض (لعروضهم الخاصة)',
        'صفحة التتبع (للشحنات التي يعملون عليها)'
    ],
    availableFunctions: [
        'تسجيل/تعديل المعلومات',
        'عرض وقبول العروض المتاحة',
        'تتبع الشحنات المنفذة'
    ]
};

// صلاحيات الشركات
const companyPermissions = {
    accessPages: [
        'صفحة تسجيل الدخول/التسجيل',
        'صفحة الحساب الشخصي',
        'صفحة تفاصيل العروض',
        'صفحة التتبع (للشحنات الخاصة بهم)'
    ],
    availableFunctions: [
        'تسجيل/تعديل بيانات الشركة',
        'إدارة عروض الشحن',
        'تتبع الشحنات الخاصة بالشركة'
    ]
};

// مثال على استخدام صلاحيات المندوبين
console.log('صلاحيات المندوبين:');
console.log('الوصول إلى الصفحات:');
courierPermissions.accessPages.forEach(page => console.log(page));
console.log('الوظائف المتاحة:');
courierPermissions.availableFunctions.forEach(func => console.log(func));

// مثال على استخدام صلاحيات الشركات
console.log('صلاحيات الشركات:');
console.log('الوصول إلى الصفحات:');
companyPermissions.accessPages.forEach(page => console.log(page));
console.log('الوظائف المتاحة:');
companyPermissions.availableFunctions.forEach(func => console.log(func));
