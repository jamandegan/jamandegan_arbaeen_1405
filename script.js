const map = L.map('map').setView([35.52198,51.49887],12);


L.tileLayer(
'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);



const start=[35.44054,51.57129];
const destination=[35.60342,51.42645];

// NOTE: The uploaded registration sheet contains names/manager/address information,
// but the supplied address text is often generic ("مسیر پیاده روی جاماندگان اربعین").
// Therefore coordinates are approximate, assigned along the route below.
// For exact coordinates, replace lat/lng with verified geocoded locations.
const mokebs=[
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "قعله نو نرسید به کلانتری ",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت صبحانه آب هندونه ۲۰۰۰۰۰",
    "phone": "۰۹۱۰۰۷۴۴۸۰۳"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "موکب امام رضا ع\nکانون خدمت رضوی ",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۳۰۰۰",
    "phone": "۰۹۱۰۶۷۴۵۱۷۷"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "موکب امام رضا ع",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت مجید بیرامی",
    "phone": "۰۹۱۰۶۷۴۵۱۷۷"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "حضرت علی اصغر",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت صبحانه الویه۷۰۰عددهندوانه ۲۰۰۰هزارکیلو آب شربت به مقدار کافی ",
    "phone": "۰۹۱۰۰۷۴۴۸۰۳"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "جوانان حضرت علی اصغر",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۱۱۱۱",
    "phone": "09029825654"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "پایگاه شهید حسن تاجیک \nمسجد صاحب الزمان ",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 2 تا 3 هزار نفر",
    "phone": "09307036986"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "موکب قمر بنی هاشم",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۴۰۰۰۰",
    "phone": "۰۹۳۶۵۴۲۴۵۲۴"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "موکب جاماندگان اربعین حسینیه سیدالشهداباقرابادخیابان مافی اباد",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۳۰۰۰",
    "phone": "۰۹۳۰۳۸۲۰۸۳۲"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "فاطمه الزهرا شهید ستاری قرچک",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 10000",
    "phone": "09353633220"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "جوانان حضرت علی اصغر ",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۱۱۱۱۱",
    "phone": "09029825654"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "هیعت جوانان حضرت علی اصغر",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت None",
    "phone": "09029825654"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "حوزه بسیج اصناف ، کسبه و بازاریان شهرستان قرچک ",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۵۰۰۰",
    "phone": "۰۹۱۲۲۸۶۰۰۷۶"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "دولتی(فرمانداری وبخشداری مرکزی ودهیاریهای تابعه قرچک)",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۵۰۰۰",
    "phone": "۰۹۱۲۵۷۹۴۲۲۰"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "دلباختگان حضرت فاطمه(ص)",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 1000",
    "phone": "09396936003"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "موکب فاطمة الزهرا",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 1000",
    "phone": "09396936003"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "مردمی",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۳۵۰۰",
    "phone": "۰۹۳۷۲۴۲۴۱۲۱۳"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "جهادی ",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۳۵۰۰",
    "phone": "۰۹۳۷۲۴۲۴۱۲۱۳"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "مردمی",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۳۵۰۰",
    "phone": "۰۹۳۷۲۴۲۴۱۲۱۳"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "مردمی",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۳۵۰۰نفر",
    "phone": "۰۹۳۷۲۴۲۱۲۱۳"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "حوزه علمیه خواهران شهرستان قرچک ",
    "type": "فرهنگی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 500",
    "phone": "09366506011"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "گروه جهادی اباصالح",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۸۰۰۰",
    "phone": "۰۹۱۹۸۸۱۶۷۵۰"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "ابا عبدالله الحسین علیه السلام ",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۱۰۰۰۰۰",
    "phone": "۰۹۳۶۷۳۴۹۹۱۰"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "اداره تبلیغات اسلامی ",
    "type": "فرهنگی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 20",
    "phone": "09214674559"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "شهید نادر قشقای",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 5000",
    "phone": "09123798209"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "موکب جاماندگان اربعین",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۱۰۰۰۰۰",
    "phone": "۰۹۱۲۶۷۸۸۶۱۴"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "شبکه بهداشت و درمان قرچک ",
    "type": "درمانی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 20000",
    "phone": "09126103986"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "هیئت الشهدای قرچک",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۱۰۰۰۰",
    "phone": "۰۹۰۲۱۶۱۰۹۰۰"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "هیئت جوانان مکتب العباس ع ",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 7000",
    "phone": "09109488031"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "خبری",
    "type": "فرهنگی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۱۰۰۰",
    "phone": "۰۹۰۳۱۱۳۶۷۴۴"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "مجموعه فرهنگی منتظران المهدی ",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 10000",
    "phone": "0901 148 9910"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "مجمع حیدریون زیباشهر ",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۳۰۰۰۰۰",
    "phone": "۰۹۳۳۳۸۹۰۳۶۳"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "هیت ",
    "type": "خدماتی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۲۰۰۰",
    "phone": "۰۹۱۸۹۱۸۴۵۹۸ "
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "هیئت الشهدای قرچک ",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۱۰۰۰۰",
    "phone": "۰۹۰۲۱۶۱۰۹۰۰"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "موکب رقیه بنت الحسین (ع)",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 600",
    "phone": "09904766413"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "حوزه بسیج سیدالشهداء(علیه السلام)\nگروه جهادی سردار حاج قاسم سلیمانی",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 10000",
    "phone": "09191912589"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "موکب مسجد امام رضا علیه‌السلام ",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۵۰۰۰",
    "phone": "۰۹۳۹۷۸۷۹۷۴۴"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "ستاد اقامه نماز ",
    "type": "فرهنگی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۲۰۰۰۰ تا ۳۰۰۰۰",
    "phone": "۰۹۲۱۳۱۵۸۲۱۱"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "شهید غلامرضا خراسانی وشهید جواد پازوکی",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۵۰۰۰تا۶۰۰۰",
    "phone": "۰۹۹۲۵۳۹۶۲۵۰"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "موکب مکتب نورالقرآن",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۳۰۰۰",
    "phone": "۰۹۳۵۳۷۷۱۳۲۵"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "مکتب نورالقرآن",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 3000",
    "phone": "۰۹۳۵۳۷۷۱۳۲۵"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "موکب محبان حضرت ابولفضل علیه السلام ",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 2000",
    "phone": "09190233520"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "مسجد حضرت ابوالفضل(ع) و پایگاه بسیج شهدای گمنام قرچک",
    "type": "خدماتی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 50",
    "phone": "09124922070"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "مسجد حضرت ابوالفضل(ع) و پایگاه بسیج شهدای گمنام قرچک",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 1000",
    "phone": "09124922070"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "موکب رقیه بنت الحسین (ع)",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 500 نفر",
    "phone": "09904766413"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "هیئت منتظران المهدی(عج)",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 10000",
    "phone": "0901 148 9910"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "هیئت جوانان مکتب العباس ع ",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 9000",
    "phone": "09109488031"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "هیئت منتظران المهدی(عج)",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 10000",
    "phone": "09011489910"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "مرکز نیکو کاری طلایه داران ظهور ",
    "type": "خدماتی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 10000",
    "phone": "09196305177"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "گروه جهادی شهید مصطفی صدر زاده ",
    "type": "فرهنگی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 10000",
    "phone": "09196305177"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "موکب هیئت چهارده معصوم(ع)",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۵۰۰۰ نفر غذا ۷۰۰۰ نفر چای وشربت",
    "phone": "۰۹۱۲۱۳۸۵۲۱۹"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "موکب هیئت چهارده معصوم (ع)",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۵۰۰۰ نفر غذا ۷۰۰۰ نفر چای وشربت",
    "phone": "09121385219"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "موکب خدمت گذاران مولا علی (ع)",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 4000",
    "phone": " 09103153527"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "یگان امنیتی حضرت ثامن الحجج",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 8000",
    "phone": "09929194214"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "هیئت امیر المومنین ع",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 2000",
    "phone": "09199521356"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "گروه جهادی شهید بقرایی ",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت تا دویست ملیون تومان ",
    "phone": "۰۹۳۹۳۹۰۹۴۱۰"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "حوزه امام حسین ع ",
    "type": "خدماتی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۱۰۰۰۰",
    "phone": "۰۹۱۹۱۳۷۵۳۲۶"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "گروه جهادی شهید بقرایی ",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت از۰  تا ۲۰۰۰۰۰۰۰۰",
    "phone": "۰۹۳۹۳۹۰۹۴۱۰"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "گروه جهادی شهید کیوان تاجیک",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت حداقل ۲/۰۰۰/۰۰۰ نفر",
    "phone": "۰۹۱۲۷۹۲۰۹۸۹"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "محبین الائمه",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 5000",
    "phone": "09122128532"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "خیریه حضرت زینب س",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 2000",
    "phone": "09122759359"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "هیئت اباعبدالله الحسین",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۲۰۰۰۰ نفر",
    "phone": "۰۹۱۲۱۴۹۱۹۷۷"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "هیئت اباعبدالله... الحسین",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۲۰۰۰۰ نفر",
    "phone": "۰۹۱۲۱۴۹۱۹۷۷"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "موکب قمربنی هاشم",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 2000",
    "phone": "09358620959"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "موکب بین الحرمین ",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 10000 لیوان شربت و آب ",
    "phone": "09362656116"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "شهداء عشائر شهرستان",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 10000",
    "phone": "09123943372"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "هیئت قمر بنی هاشم قرچک زیباشهر ",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت None",
    "phone": "۰۹۱۲۴۵۹۷۵۶"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "هیئت قمربنی هاشم(ع) زیباشهر شهرستان قرچک",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۳۰۰۰",
    "phone": "۰۹۱۲۴۵۹۰۷۵۶"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "موكب خانم ام البنين سلام الله عليها",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت خدمات پذيزايي و فرهنگي \n",
    "phone": "09351194204"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "مرکزنیکوکاری شهیدمیثم نجفی وگروه جهادی شهیدمیثم نجفی ",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 10000",
    "phone": "09120635528"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "موکب حسینیه بیت الزهراءسلام الله علیه وخامین افتخاری حضرت رضاعلیه السلام شهرستان قرچک ",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۱۰۰۰۰",
    "phone": "۰۹۱۹۱۹۲۶۰۸۴"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "موکب حسینیه بیت الزهراءسلام الله علیها امام رضائیهای شهرستان قرچک",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۱۰۰۰۰",
    "phone": "۰۹۱۹۱۹۲۶۰۸۴"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "هیئت قمربنی هاشم ع زیباشهر شهرستان قرچک",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۳۰۰۰ ",
    "phone": "۰۹۱۲۴۵۹۰۷۵۶"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "موکب هیئت مجمع حیدریون زیباشهر ",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۲۰۰۰",
    "phone": "۰۹۳۳۳۸۹۰۳۶۳"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "موکب قمر بنی هاشم ",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۳۰۰۰ هزار نفر",
    "phone": "۰۹۳۵۸۶۲۰۹۵۸"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "موکب قمر بنی هاشم",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۱۰۰۰ ",
    "phone": "۰۹۳۵۸۶۲۰۹۵۹"
  },
  {
    "manager": "",
    "city": "قرچک",
    "area": "",
    "location": "",
    "name": "رسانه ۱۵ خرداد رسانه اربعین",
    "type": "فرهنگی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۱۰۰۰",
    "phone": "09120202712"
  }
];


// ===============================
// نقاط خدمات و محل‌های مهم مسیر
// ===============================
const servicePoints = [

  {
    name: "سرویس بهداشتی - گلتپه ۱۰",
    type: "سرویس بهداشتی",
    address: "گلتپه ۱۰",
    lat: 35.47500,
    lng: 51.54500,
    services: "سرویس بهداشتی"
  },
  {
    name: "سرویس بهداشتی - سر طالب‌آباد ۳",
    type: "سرویس بهداشتی",
    address: "سر طالب‌آباد ۳",
    lat: 35.47000,
    lng: 51.55000,
    services: "سرویس بهداشتی"
  },
  {
    name: "سرویس بهداشتی - قلعه نو",
    type: "سرویس بهداشتی",
    address: "قلعه نو",
    lat: 35.48600,
    lng: 51.53500,
    services: "سرویس بهداشتی"
  },
  {
    name: "سرویس بهداشتی - تالار امیران فیروزآباد",
    type: "سرویس بهداشتی",
    address: "تالار امیران فیروزآباد",
    lat: 35.50000,
    lng: 51.51500,
    services: "سرویس بهداشتی"
  },
  {
    name: "سرویس بهداشتی - جاده نظامی",
    type: "سرویس بهداشتی",
    address: "جاده نظامی، سر چهارراه",
    lat: 35.52000,
    lng: 51.49000,
    services: "سرویس بهداشتی"
  },
  {
    name: "موکب شهرداری",
    type: "خدماتی",
    address: "۷۰۰ متر بعد طالب‌آباد",
    lat: 35.46179,
    lng: 51.55731,
    services: "موکب شهرداری"
  },
{
    name: "مسجد - قلعه نو",
    type: "خدماتی",
    address: "قلعه نو",
    lat: 35.48600,
    lng: 51.53500,
    services: "مسجد"
  },
  {
    name: "مسجد - قلعه نو ۲",
    type: "خدماتی",
    address: "قلعه نو",
    lat: 35.48700,
    lng: 51.53600,
    services: "مسجد"
  },
  {
    name: "مدرسه - قلعه نو",
    type: "خدماتی",
    address: "قلعه نو",
    lat: 35.48800,
    lng: 51.53700,
    services: "مدرسه"
  },
  {
    name: "مسجد - تالار امیران فیروزآباد",
    type: "خدماتی",
    address: "تالار امیران فیروزآباد",
    lat: 35.50000,
    lng: 51.51500,
    services: "مسجد"
  },
  {
    name: "مدرسه - تالار امیران فیروزآباد",
    type: "خدماتی",
    address: "تالار امیران فیروزآباد",
    lat: 35.50100,
    lng: 51.51600,
    services: "مدرسه"
  },
  {
    name: "نقطه گلتپه ۱۰",
    type: "خدماتی",
    address: "گلتپه ۱۰",
    lat: 35.47500,
    lng: 51.54500,
    services: "نقطه راهنما"
  },
  {
    name: "نقطه سر طالب‌آباد ۳",
    type: "خدماتی",
    address: "سر طالب‌آباد ۳",
    lat: 35.47000,
    lng: 51.55000,
    services: "نقطه راهنما"
  },
  {
    name: "نقطه جاده نظامی",
    type: "خدماتی",
    address: "جاده نظامی، سر چهارراه",
    lat: 35.52000,
    lng: 51.49000,
    services: "نقطه راهنما"
  }
];

const allMapItems = [...mokebs, ...servicePoints];


let markers=[];



function color(type){

if(type==="فرهنگی")
return "#2196f3";

if(type==="پذیرایی")
return "#22c55e";

if(type==="خدماتی")
return "#ff9800";

return "#ef4444";

  if(type === "سرویس بهداشتی") return "#8e44ad";
}





function show(data){


markers.forEach(m=>{
map.removeLayer(m);
});


markers=[];


data.forEach(x=>{


if(!x.lat || !x.lng)
return;



const serviceSymbol = {
  "خدماتی": "🚻"
};

let icon=L.divIcon({
  className:"",
  html: x.type==="حمل‌ونقل"
    ? `<div style="width:42px;height:42px;background:#1976d2;border:3px solid white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:22px;box-shadow:0 2px 8px rgba(0,0,0,.45);">${x.name.includes("ون") ? "🚐" : "🚌"}</div>`
    : (x.name.includes("سرویس بهداشتی")
      ? `<div style="width:24px;height:24px;background:#8e44ad;border:3px solid white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;box-shadow:0 1px 4px rgba(0,0,0,.35);">🚻</div>`
      : `<div style="width:28px;height:28px;background:${color(x.type)};border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:2px solid white;"><div style="width:10px;height:10px;background:white;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(45deg);"></div></div>`),
  iconSize: x.type==="حمل‌ونقل" ? [42,42] : (x.name.includes("سرویس بهداشتی") ? [24,24] : [28,28]),
  iconAnchor: x.type==="حمل‌ونقل" ? [21,21] : (x.name.includes("سرویس بهداشتی") ? [12,12] : [14,28])
});



let marker=L.marker(
[x.lat,x.lng],
{
icon:icon
}
)
.addTo(map);



marker.bindPopup(`

<div class="popupCard">

<h3 class="popupTitle">
${x.name}
</h3>

<p>
📍 ${x.address}
</p>

<p>
🏷 ${x.type}
</p>

<p>
🍵 ${x.services}
</p>

<a class="popupBtn"
target="_blank"
href="https://www.google.com/maps/search/?api=1&query=${x.lat},${x.lng}">
🧭 مسیریابی
</a>

</div>

`);


markers.push(marker);


});



document.getElementById("mokebCount").innerText=data.length;

}





function filterType(type){

  if(type === "all"){
    show(allMapItems);
    return;
  }

  show(
    allMapItems.filter(x => {

      // فیلتر مخصوص سرویس بهداشتی
      if(type === "سرویس بهداشتی"){
        return x.services === "سرویس بهداشتی" ||
               x.name.includes("سرویس بهداشتی");
      }

      // فیلتر معمولی سایر دسته‌ها
      return x.type === type;
    })
  );

}






// جستجوی کامل در نام موکب، نام مدیر، آدرس، نوع، خدمات و شماره تماس
// با نرمال‌سازی حروف فارسی و اعداد، تا عباراتی مثل «شهرک صنعتی» هم پیدا شوند.
function normalizeSearch(value){
  return String(value ?? "")
    .toLowerCase()
    .replace(/[يى]/g,"ی")
    .replace(/ك/g,"ک")
    .replace(/ة/g,"ه")
    .replace(/ۀ/g,"ه")
    .replace(/ؤ/g,"و")
    .replace(/أ|إ/g,"ا")
    .replace(/[\u200c\u200f\u200e]/g," ")
    .replace(/[۰-۹]/g, d => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))
    .replace(/\s+/g," ")
    .trim();
}

function searchableText(x){
  return normalizeSearch([
    x.name,
    x.manager,
    x.address,
    x.type,
    x.services,
    x.phone,
    x.city,
    x.area,
    x.location
  ].join(" "));
}

document
.getElementById("search")
.addEventListener("input",function(){
  const query = normalizeSearch(this.value);

  if(!query){
    show(allMapItems);
    return;
  }

  const terms = query.split(" ").filter(Boolean);

  show(
    allMapItems.filter(x => {
      const text = searchableText(x);
      return terms.every(term => text.includes(term));
    })
  );
});





L.marker(start)
.addTo(map)
.bindPopup("📍 مبدا");



L.marker(destination)
.addTo(map)
.bindPopup("🏁 مقصد");





fetch(
`https://router.project-osrm.org/route/v1/driving/${start[1]},${start[0]};${destination[1]},${destination[0]}?overview=full&geometries=geojson`
)


.then(res=>res.json())


.then(data=>{


let route=
data.routes[0]
.geometry
.coordinates
.map(c=>[
c[1],
c[0]
]);



L.polyline(route,{

color:"#FFD54F",
weight:6

})
.addTo(map);



// Approximate coordinates: distribute each registered mokeb along the walking route.
// These are approximate and should be refined with exact address/geocoding data when available.
mokebs.forEach((m,i)=>{
  const index = Math.floor((i*(route.length-1))/(Math.max(1,mokebs.length-1)));
  const point = route[index];
  m.lat = point[0];
  m.lng = point[1];
});

show(allMapItems);

map.fitBounds(route);;



show(allMapItems);



map.fitBounds(route);


});





function showMyLocation(){


if(!navigator.geolocation){

alert("موقعیت پشتیبانی نمی‌شود");
return;

}



navigator.geolocation.getCurrentPosition(pos=>{


let lat=pos.coords.latitude;
let lng=pos.coords.longitude;



L.marker([lat,lng])
.addTo(map)
.bindPopup("📍 موقعیت شما")
.openPopup();



map.setView(
[lat,lng],
15
);



let distance=
map.distance(
[lat,lng],
destination
)/1000;



document.getElementById("distanceInfo").innerHTML=

`🏁 فاصله تا حرم: ${distance.toFixed(1)} کیلومتر`;



},()=>{

alert("دسترسی موقعیت فعال نیست");

});


}




show(allMapItems);