const map = L.map('map').setView([35.52198,51.49887],12);

L.tileLayer(
'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);

const start=[35.44054,51.57129];

// مقصد جدید: حرم شاه عبدالعظیم حسنی
const destination=[35.58518,51.43778];

const mokebs=[
  {
    "name": "قعله نو نرسید به کلانتری ",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت صبحانه آب هندونه ۲۰۰۰۰۰",
    "phone": "۰۹۱۰۰۷۴۴۸۰۳"
  },
  {
    "name": "موکب امام رضا ع\nکانون خدمت رضوی ",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۳۰۰۰",
    "phone": "۰۹۱۰۶۷۴۵۱۷۷"
  },
  {
    "name": "موکب امام رضا ع",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت مجید بیرامی",
    "phone": "۰۹۱۰۶۷۴۵۱۷۷"
  },
  {
    "name": "حضرت علی اصغر",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت صبحانه الویه۷۰۰عددهندوانه ۲۰۰۰هزارکیلو آب شربت به مقدار کافی ",
    "phone": "۰۹۱۰۰۷۴۴۸۰۳"
  },
  {
    "name": "جوانان حضرت علی اصغر",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۱۱۱۱",
    "phone": "09029825654"
  },
  {
    "name": "پایگاه شهید حسن تاجیک \nمسجد صاحب الزمان ",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 2 تا 3 هزار نفر",
    "phone": "09307036986"
  },
  {
    "name": "موکب قمر بنی هاشم",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۴۰۰۰۰",
    "phone": "۰۹۳۶۵۴۲۴۵۲۴"
  },
  {
    "name": "موکب جاماندگان اربعین حسینیه سیدالشهداباقرابادخیابان مافی اباد",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۳۰۰۰",
    "phone": "۰۹۳۰۳۸۲۰۸۳۲"
  },
  {
    "name": "فاطمه الزهرا شهید ستاری قرچک",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 10000",
    "phone": "09353633220"
  },
  {
    "name": "جوانان حضرت علی اصغر ",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۱۱۱۱۱",
    "phone": "09029825654"
  },
  {
    "name": "هیعت جوانان حضرت علی اصغر",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت None",
    "phone": "09029825654"
  },
  {
    "name": "حوزه بسیج اصناف ، کسبه و بازاریان شهرستان قرچک ",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۵۰۰۰",
    "phone": "۰۹۱۲۲۸۶۰۰۷۶"
  },
  {
    "name": "فرمانداری، بخشداری و دهیاری‌ها",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۵۰۰۰",
    "phone": "۰۹۱۲۵۷۹۴۲۲۰",
    "lat": 35.46200,
    "lng": 51.55749
  },
  {
    "name": "دلباختگان حضرت فاطمه(ص)",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 1000",
    "phone": "09396936003"
  },
  {
    "name": "موکب فاطمة الزهرا",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 1000",
    "phone": "09396936003"
  },
  {
    "name": "مردمی",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۳۵۰۰",
    "phone": "۰۹۳۷۲۴۲۴۱۲۱۳"
  },
  {
    "name": "جهادی ",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۳۵۰۰",
    "phone": "۰۹۳۷۲۴۲۴۱۲۱۳"
  },
  {
    "name": "مردمی",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۳۵۰۰",
    "phone": "۰۹۳۷۲۴۲۴۱۲۱۳"
  },
  {
    "name": "مردمی",
    "type": "پذیرایی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت ۳۵۰۰نفر",
    "phone": "۰۹۳۷۲۴۲۱۲۱۳"
  },
  {
    "name": "حوزه علمیه خواهران شهرستان قرچک ",
    "type": "فرهنگی",
    "address": "مسیر پیاده روی جاماندگان اربعین",
    "services": "ظرفیت 500",
    "phone": "09366506011"
  },
{
  "name": "گروه جهادی اباصالح",
  "type": "پذیرایی",
  "address": "مسیر پیاده روی جاماندگان اربعین",
  "services": "ظرفیت ۸۰۰۰",
  "phone": "۰۹۱۹۸۸۱۶۷۵۰"
},

{
  "name": "موکب شهرداری",
  "type": "پذیرایی",
  "address": "بین طالب آباد و قمی آباد",
  "services": "ظرفیت نامشخص",
  "phone": "",
  "lat": 35.49687,
  "lng": 51.52613
},

{
  "name": "فرمانداری، بخشداری و دهیاری‌ها",
  "type": "پذیرایی",
  "address": "مسیر پیاده روی جاماندگان اربعین",
  "services": "ظرفیت ۵۰۰۰",
  "phone": "۰۹۱۲۵۷۹۴۲۲۰",
  "lat": 35.46200,
  "lng": 51.55749
}

];
let markers=[];

function color(type){

if(type==="فرهنگی")
return "#2196f3";

if(type==="پذیرایی")
return "#22c55e";

if(type==="خدماتی")
return "#ff9800";

return "#ef4444";

}

function show(data){

markers.forEach(m=>{
map.removeLayer(m);
});

markers=[];

data.forEach(x=>{

if(!x.lat || !x.lng)
return;

let icon=L.divIcon({

className:"",

html:`

<div style="
width:28px;
height:28px;
background:${color(x.type)};
border-radius:50% 50% 50% 0;
transform:rotate(-45deg);
border:2px solid white;
">

<div style="
width:10px;
height:10px;
background:white;
border-radius:50%;
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%) rotate(45deg);
"></div>

</div>

`,

iconSize:[28,28],
iconAnchor:[14,28]

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
🏷️ ${x.type}
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

function filterMokeb(type){

if(type==="all"){

show(mokebs);

return;

}

show(
mokebs.filter(
x=>x.type===type
)
);

}

document
.getElementById("search")
.addEventListener("input",function(){

show(

mokebs.filter(
x=>x.name.includes(this.value)
)

);

});

L.marker(start)
.addTo(map)
.bindPopup("📍 مبدا");

L.marker(destination)
.addTo(map)
.bindPopup("🏁 حرم شاه عبدالعظیم حسنی");

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

mokebs.forEach((m,i)=>{

// مختصات ثابت موکب شهرداری
if(m.name==="موکب شهرداری"){

m.lat=35.49687;
m.lng=51.52613;

return;

}

// مختصات ثابت فرمانداری، بخشداری و دهیاری‌ها
if(m.name==="فرمانداری، بخشداری و دهیاری‌ها"){

m.lat=35.46200;
m.lng=51.55749;

return;

}

// بقیه موکب‌ها روی مسیر قرار می‌گیرند
const index=Math.floor(
(i*(route.length-1))/(mokebs.length-1)
);

const point=route[index];

m.lat=point[0];
m.lng=point[1];

});

show(mokebs);

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

`🏁 فاصله تا حرم شاه عبدالعظیم حسنی: ${distance.toFixed(1)} کیلومتر`;

},()=>{

alert("دسترسی موقعیت فعال نیست");

});

}

show(mokebs);
