// الوقود باللتر
const fuelCostPerLiter = 2.5; // سعر الوقود بالعملة المحلية
const fuelConsumptionRate = 0.1; // نسبة استهلاك الوقود باللتر لكل كيلومتر

// تكلفة المنتج
const productCost = 100; // تكلفة المنتج بالعملة المحلية

// نسبة الموقع
const websitePercentage = 0.09; // نسبة الموقع (من 1 إلى 9%)

// تكلفة الاشتراك الشهري
const subscriptionCost = {
    "customer": 50, // تكلفة الاشتراك الشهري للعميل
    "merchant": 100, // تكلفة الاشتراك الشهري للتاجر
    "carrier": 75 // تكلفة الاشتراك الشهري للناقل
};

// تكلفة الدعاية والإعلان
const advertisingCost = 200; // تكلفة الدعاية والإعلان بالعملة المحلية

// القيمة الضريبية والقيمة المضافة
const taxValue = 0.1; // النسبة الضريبية
const vatValue = 0.05; // النسبة المضافة

// نسبة بوليصة التأمين على الشحنات
const cargoInsuranceRate = 0.03; // نسبة بوليصة التأمين على الشحنات

// تقدير المسافة بالكيلومترات
function calculateDistance(start, end) {
    // يمكنك استخدام مكتبة خارجية مثل Google Maps لحساب المسافة الفعلية
    return Math.abs(end - start);
}

// تقدير التكلفة بالعملة المحلية
function estimateCost(distance) {
    const fuelNeeded = distance * fuelConsumptionRate;
    const cost = fuelNeeded * fuelCostPerLiter;
    return cost;
}

// حساب الفارق بين العملة المحلية والعالمية
function calculateExchangeRateDifference(localCurrencyPrice, foreignCurrencyPrice) {
    return foreignCurrencyPrice - localCurrencyPrice;
}

// مثال على استخدام الوظائف
const distance = calculateDistance(100, 200); // تقدير المسافة بالكيلومترات
const costLocalCurrency = estimateCost(distance); // تقدير التكلفة بالعملة المحلية
const costForeignCurrency = 50; // تقدير التكلفة بالعملة الأجنبية
const exchangeRateDifference = calculateExchangeRateDifference(costLocalCurrency, costForeignCurrency); // حساب الفارق بين العملة المحلية والعالمية

console.log("المسافة: " + distance + " كم");
console.log("التكلفة بالعملة المحلية: " + costLocalCurrency + " عملة محلية");
console.log("التكلفة بالعملة الأجنبية: " + costForeignCurrency + " عملة أجنبية");
console.log("الفارق في سعر العملة: " + exchangeRateDifference);

// تكلفة المنتج
console.log("تكلفة المنتج: " + productCost + " عملة محلية");

// تكلفة الاشتراك الشهري
console.log("تكلفة الاشتراك الشهري للعميل: " + subscriptionCost.customer + " عملة محلية");
console.log("تكلفة الاشتراك الشهري للتاجر: " + subscriptionCost.merchant + " عملة محلية");
console.log("تكلفة الاشتراك الشهري للناقل: " + subscriptionCost.carrier + " عملة محلية");

// تكلفة الدعاية والإعلان
console.log("تكلفة الدعاية والإعلان: " + advertisingCost + " عملة محلية");

// القيمة الضريبية والقيمة المضافة
const taxAmount = costLocalCurrency * taxValue;
const vatAmount = costLocalCurrency * vatValue;
console.log("القيمة الضريبية: " + taxAmount + " عملة محلية");
console.log("القيمة المضافة: " + vatAmount + " عملة محلية");

// نسبة بوليصة التأمين على الشحنات
console.log("نسبة بوليصة التأمين على الشحنات: " + cargoInsuranceRate * 100 + "%");

