// //  // Objectlar                                               
// //    let text ={name:"Muhammadjon",surname:"Murodullayev", year:2005
// // }          
// // console.log(text);          
// //  kiy: valyu------deyiladi 
// // kiy,name,indeketor-yani ko'rsatuvchi:yalyu         
// // let account = {
// // name:"Webbrain Academiy",
// // major:"frontend",
// // foundet:"2020"
// // }`
// // console.log(account);
// // let obj = new Object();
// // console.log(obj);
// ////////// Object ichidagi har bittasini olib kelish uchun ". nuqta" nuqtadan foydalanamiz
// // let account = {
// //   name:"Webbrain Academiy",
// //   major:"frontend",
// //   foundet:"2020",
// //   "full name" : "Webbrain IT academiy"
// // }
// // console.log(account["full name"]);
// // ikkita bo'g'indan iborat so'zlarni chaqirishimiz uchun "" ikkitalik qo'shtirnoqdan foydalanamiz
// // biz raqamlar ham yozishimiz mumkin ularni chaqirganimizda ["1651651"] manashunday holatda chaqiramiz 
// // yangi malumot qo'shish ucun masalan:"account.name = 2020;" Manashunaqa qilib qoshiladi 
// // Object.freeze(account)----bu kodimiz malumotlarni o'zgartira olmasligimiz ucun ishlatiladi
// //   console.log(account.major);
// // console.log(account[key]);
// // console.log(account["key"]);
// // Object.freeze(account)
// // Object.seal(account)
// // freeze va seal ni farqi freezeda hechnima o'zgartirib bolmaydi,Sealda esa faqat bor malumoti yangilasa bo'ladi 
// // Object.assign(obj1,obj2) -----yani bu  assign degani obj1ga obj2nii malumotini biriktirdik degani 
// // let account = {
// //   name: "Webbrain Academiy",
// //   major: "frontend",
// //   foundet: "2020",
// //   "full name": "Webbrain IT academiy",
// // }
// // account.year = 2019
// // console.log(account);
// // let account ={
// //   name:"Muhammadjon",
// //   surname:"Murodullayev",
// //   year:2005,
// //   "full name" :"Muhammadjon Muroullayev"
// // }
// // let key = "year";
// // console.log(account);
// // let obj = new Object();
// // console.log(obj);
// // console.log(account.name);
// // console.log(account[key]);
// // console.log(account["full name"]);
// // console.log(account[0]);
// // Object.freeze(account)
// // Object.seal(account)
// // account.fullname = "Webbrain academy"
// // account.name = "Eshmat"
// // console.log(account);
// // const key = "surname";

// // let account ={
// // name:"Muhammadjon",
// // surname:"Murodullayev",
// // year:2005

// // }
// // for ( let i in account)
// // console.log(i);

// // let user = {
// //     name: "John",
// //     surname: "Smith",

// // }
// // user.name = "Pete";
// // delete user.name;
// // console.log();
// // let schdule = {}
// // alert(isEmpty(schudele));
// // schudele["8:30"]="Get up";
// // alert(isEmpty(schdule));

// // for (key in schdule) {
// //     console.log();
// //     if (key) {
// //         console.log(false);
// //     }

// // }
// // console.log(schdule);

// // function check(obj) {
// //     for (key in obj) {
// //         if (typeof key === "undefined");
// //         return console.log(true);
// //     }
// // }
// // console.log(check(schdule));
// // let ish = {
// //     John: 100,
// //     Pet: 160,
// //     Ann: 130,

// // }
// // let sum = 0;
// // for (value in ish ) {
// //     if (ish[value] > sum){
// //         sum=ish[value]
// //     }
// // }
// // // console.log(sum);
// // let ish = {
// //     John: 200,
// //     Pet: 300,
// //     title: "My menu"
// // }
// // let sum = 0;
// // for (value in ish) {
// //     let res = ish[value] *2
// //     console.log(res);
// //     // if (ish[value] > sum) {
// //     //     console.log(ish[value] * 2);
// // }
// // }
// // for ( value in ish){
// //     // console.log(ish[value]);
// //     if  (typeof ish[value]=="number"  ){
// //         console.log(ish[value]*2);
// //     }
// // }

// // let age ='age'
// // let obj ={
// // name:"webbrain",
// // surname:"It center",
// // [age]:18,
// // 'full name' : "Webbrain it academiy"
// // }
// // // obj.name = "js"
// // delete obj.name

// // console.log(obj);
// // // =========================================================================
// // let obj = {
// //     name: "Muhammadjon",
// //     surname:"Murodullayev",
// //     age:18,
// //     "full name":"Murodullayev Muhammadjon "
// // }
// // // console.log(obj);
// // console.log('full name' in obj);// ichida full name bor yoki yoqligini tekshiradi 
// // homework
// // let user = {
// //     name: `John`,
// //     surname: `Simith`,
// // }
// // user.name = 'Pate'
// // delete user.name
// // // console.log(user);
// // // console.log((name.John)+(name.Ann)+(name.Pete));
// // let name = {
// //     John: 100,
// //     Ann: 160,
// //     Pete: 130,
// // }
// // function Muhammadjon(arr) {
// //     res = 0
// //     res = res + arr.Ann
// //     res = res + arr.Pete
// //     res = res + arr.John
// //     return res;
// // // }
// // // console.log(Muhammadjon(name))
// // console.log(name);
// // let son = -8
// // son==0?console.log(0):son>1?console.log(-1):console.log(1);
// // let name = {
// //         John: 100,
// //         Ann: 160,
// //         Pete: 130,
// //     }


// // function Muhammadjon(arr) {
// //     res = 0
// //     res = res + arr.Ann
// //     res = res + arr.Pete
// //     res = res + arr.John
// //     return res;
// // }
// // console.log(Muhammadjon(name))


// // for (let i in name ){
// //     console.log(i);
// // }
// // let name = {
// //     John: 100,
// //     Ann: 160,
// //     Pete: 130,
// // }
// // console.log(name[100] in name);
// // if (typeof name.Width === 'number') {
// //     name.Width *= 2;
// // }
// // if (typeof name.heigth === "number") {
// //     name.heigth *= 2;
// // }
// // if (typeof name.title === "number") {
// //     name.title *= 2;
// // }
// // console.log(name);
// // let arr = Object.values(name)

// // function Muhammadjon(arr) {
// //     res = 0
// //     res = res + arr.Ann
// // //     res = res + arr.John
// // //     res = res + arr.Pete
// // //     return res;
// // // }
// // // console.log(Muhammadjon(name))

// let name = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// }
// let arr = Object.values(name)
// let res = 0
// for (i of arr) {
//     res = res + i
// }
// console.log(res);
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"

// };
// for (i in menu) {
//     if (typeof menu[i] == "number") {
//         menu[i] *= 2;
//     }
// }
// console.log(menu);
// // let obj1 = { 
// //     name: "Muhammadjon" 
// // }
// // let a="it"
// // let obj = {
// //     name: "webrain",
// //     surname:(name)=>{
// //         console.log(this.);
// //     }
// // }
// // obj.surname()