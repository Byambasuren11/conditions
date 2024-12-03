// Exercise 1
// <h3>Write a  which checks given input/parameter:</h3>
// <ul>
//   <li>If input/parameter is divisible by 3 print => Fizz</li>
//   <li>If input/parameter is divisible by 5 print => Buzz</li>
//   <li>If input/parameter is divisible by 3 or 5 print => FizzBuzz</li>
//   <li>If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value</li>
//   <li>If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number' </li>
// </ul>
/*let input = prompt("Toogoo oruulana uu" ,"");
if(input%3===0){
console.log("Fizz");
}
else if(input%5===0){
    console.log("Buzz");
}
else if(input%3===0 || input%5===0){
    console.log("FizzBuzz");
}
else if(input%3!==0 && input%5!==0){
    console.log("given Input Number")
}
else{
    console.log("Not a number!")
}
// Exercise 2
 
// Write a JavaScript conditional statement to find the largest of five numbers.
// check input numbers are the type of number, if not console.log('Invalid inputs
 
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0
console.log("5n toonoos ihiig n oloh");
 const a=-5;
 const b=-2;
 const c=-6;
 const d=0;
 const e=-1;
 if(a>b && a>c && a>d && a>e){
    console.log("a="+a);
 }
 else if(b>c && b>d && b>e){
    console.log("b="+b);
 }
 else if(c>d && c>e){
    console.log("c="+c);
 }
 else if(d>e){
    console.log("d="+d);
 }
 else{
    console.log("e="+e);
 }
// Exercise 3
 
// Write a JavaScript program that accept two integers and display the larger.
 
// check input numbers are the type of number, if not console.log('Invalid inputs)
 
// Sample numbers : 2,5
// Output : 5
 const A=prompt("inter A number","");
 const B=prompt("inter B number","");
 console.log(A+","+B);
 console.log("ali ih iig n oloh");
 if(a>B){
    console.log("A number is larger than B");
 }
 else{
    console.log("B number is larger than A");
 }
// Exercise 4
 
// Write a JavaScript conditional statement to find the sign of product of three numbers.
// Display an console.log box with the specified sign.
 
// Sample numbers : 3, -7, 2
// Output : The sign is -
 const ni1=3;
 const ni2=-7;
 const ni3=2;
 const niilber=ni1+ni2+ni3;
 console.log("Ugugdsun 3n toonii niilber eyereg surug iig oloh");
 if(niilber>0){
    console.log("Positive")
 }
 else{
    console.log("Negative")
 }
// Exercise 5
 
// Choose the correct comparison operator to console.log true, when x is greater than y.
// Choose the correct comparison operator to console.log false, when x is equal to y.
// Choose the correct comparison operator to console.log not sure, when x is NOT equal to y.
 const x=prompt("inter the X number","");
 const y=prompt("inter the Y number","");
 console.log("ali ih iig n oloh");
 console.log(x+","+y);
 if(x>y){
    console.log("X number is greater than Y");
 }
 else if(x===y){
    console.log("X number is equal to Y");
 }
 else{
    console.log("x is NOT equal to y");
 }
// Exercise 6
 
// The Grade Assigner
// - Write a if/else statement that:
//   - takes 1 variable, a number score.
//   - returns a grade for the score, either "A", "B", "C", "D", or "F".
// - Call that if/else statement for a few different scores and log the result to make sure it works.
const Bat=prompt("Shalgah dungee oruulana uu","");
console.log("Oruulsan dun shalgah="+Bat);
if(Bat<60)
{
    console.log("F");
}
else if(Bat>=60 && Bat<=69)
{
    console.log("D");
}
else if(Bat>=70 && Bat<=79 )
{
    console.log( "C");
}
else if(Bat>=80 && Bat<=89)
{
    console.log("B");
}
else
{
    console.log("A"); 
}
// Exercise 10 j
// Write If statement that takes string
//     if string length is more than 10 print the string  has more than 10 characters
//      if string length is more than 5 return the string has more than 5 characters
//       if string length is less than 1 return the string has nothing
//       if string length is equal to 1 return the string has 1 character
const bi=prompt("Ymar negen ug bucne uu","");
console.log("Ugiin urt oloh");
if(bi.length>=10){
    console.log("the string  has more than 10 characters");
}
else if(bi.length>=5 && bi.length<10){
    console.log("the string has more than 5 characters");
}
else if(bi.length===1){
    console.log("the string has 1 character");
}
else{
    console.log("the string has nothing");
}
// Exercise 7 j

//  3) Write conditional expressions to satisfy the following safety rules:
 
//  a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".
 
//  b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"
 
//  c) If shuttleSpeed is > 17,500, print "ALERT: Escape velocity reached!" Else if shuttleSpeed is < 8000, print "ALERT: Cannot maintain orbit!" Else print "Stable speed".
 
const crewStatus = true
if(crewStatus === true) {
   console.log("Crew ready");
}
else if(crewStatus=== false)
{
    console.log("Crew Not ready");
}
const cSC = 200;
 if(cSC===200){
    console.log("Please stand by. Computer is rebooting.");
 }
 else if(cSC===400)
    console.log("Success! Computer online")
else{
    console.log("ALERT: Computer offline!");
}
const shuttleSpeed=18000;
if(shuttleSpeed>17500){
    console.log("ALERT: Escape velocity reached!");
}
else if(shuttleSpeed<8000){
    console.log("ALERT: Cannot maintain orbit!");
}
else{
    console.log("ALERT: Computer offline!")
}
// Write If statement that takes number checks if the number is odd or even
 
//     if odd return "the number is odd"
//     if even return "the number is even"
 const odd=prompt("tegsh, sondgoig shagah toogoo oruulan uu");
 console.log("tegsh sondgoig oloh");
 if(odd%2===0){
    console.log("This number is even")
 }
 else{
    console.log("This number is odd")
 }
// Exercise 8 j
 
// Write if statement that takes role and return each role with greeting
 
//     if role is 'Employee' return 'Hello'
//     if role is 'Director' return 'Greetings'
//     if role is '' return 'Please provide role'
//     else return 'Hi'
 const role="Director";
 if(role==="Director"){
console.log("Greeting");
 }
 else if(role==="Employee"){
    console.log("Hello");
 }
 else if(role===""){
    console.log("Please provide role");
 }
 else{
    console.log("Hi");
 }
// Exercise 8 j
 
// 0. Гончигсумлай хоолны газар оров. Орсон хоолны газар нь 5000₮ - 30000₮ хооронд 15% нэмж төлдөг,
// бусад үед 20% - ийг нэмж төлдөг бол. Эдгээр тохиолдолуудад нийт хэдийг төлөхийг олно уу.
// Эдгээр тохиолдолуудад тус бүр хэдийг төлөх вэ? 3000₮, 27500₮, 100000₮.
const price1 = 3000;
const price2 = 27500;
const price3 = 100000;
const taxRate1 = 0.15;
const taxRate2 = 0.2;
if (price1 <= 5000 || price1 >= 30000)
{
    console.log("ehnii hool 20% tax=" + (price1 * taxRate2 + price1));
}
else if(price2 <= 5000 && price2 >= 30000) {
    console.log("daraagiin hool 20% tax=" + (price2 * taxRate2 + price2));
}
else if(price3 <= 5000 || price3 >= 30000){
    console.log("suuliin hool 20% tax=" + (price3 * taxRate2 + price3));
}
else if(price1 >= 5000 || price1 <= 30000){
    console.log("ehnii hool 15% tax=" + (price1 * taxRate1 + price1));
}
else if(price2 >= 5000 && price2 <= 30000){
    console.log("daraagiin hool 15% tax=" + (price2 * taxRate1 + price2));
}
else if(price3 >= 5000 || price3<= 30000){
    console.log("suuliin hool 15% tax=" + (price3 * taxRate1 + price3));
}*/
// 1. Эхлээд console.log() ашиглахгүйгээр дараах харьцуулалтын илэрхийллийн үр дүнг тодорхойл. Үр дүнгээ шийдсэний дараа console.log() ашиглан баталгаажуулна уу.
//      let i = 4 > 3; //true
//      let iii = 4 < 3; //false
//      let ii = 4 >= 3;
//      let iv = 4 <= 3;
//      let v = 4 == 4;
//      let vi = 4 === 4;
//      let vii = 4 != 4;
//      let iix = 4 !== 4;
//      let ix = 4 != "4";
//      let x = 4 == "4";
//      let xi = 4 === "4";
let i = 4 > 3; //true
let iii = 4 < 3; //false
let ii = 4 >= 3; //true
let iv = 4 <= 3; //false
let v = 4 == 4; //true
let vi = 4 === 4; //true
let vii = 4 != 4; //false
let iix = 4 !== 4; //false
let ix = 4 != "4"; //true
let xx = 4 == "4"; //true
let xi = 4 === "4"; //false
console.log("let i = 4 > 3; //true=", 4 > 3);
console.log("let iii = 4 < 3; //true=", 4 < 3);
console.log("let ii = 4 >= 3; //true=", 4 >= 3);
console.log("let v = 4 == 4; //true=", 4 == 4);
console.log("let vii = 4 != 4; //false=", 4 != 4);
console.log("let iix = 4 !== 4; //false", 4 !== 4);
console.log("let ix = 4 != '4'; //true=", 4 != "4");
console.log("let xx= 4 == '4'; //true=", 4 == "4");
console.log("let xi = 4 === '4'; //false=", 4 === "4");
// 2. Эхлээд console.log() ашиглахгүйгээр дараах харьцуулалтын илэрхийллийн үр дүнг тодорхойл. Үр дүнгээ шийдсэний дараа console.log() ашиглан баталгаажуулна уу.
let one = 4 > 3 && 10 < 12; //true
let two = 4 > 3 && 10 > 12; //false
let three = 4 > 3 || 10 < 12; //true
let four = 4 > 3 || 10 > 12; //true
let five = !(4 > 3); //false
let six = !(4 < 3); //true
let eight = !(4 > 3 && 10 < 12); //false
let nine = !(4 > 3 && 10 > 12); //false
let ten = !(4 === "4"); //false
console.log("let one = 4 > 3 && 10 < 12;//true=", 4 > 3 && 10 < 12);
console.log("let two = 4 > 3 && 10 > 12;//false=", 4 > 3 && 10 > 12);
console.log("let three = 4 > 3 || 10 < 12;//true=", 4 > 3 || 10 < 12);
console.log("let four = 4 > 3 || 10 > 12;//true=", 4 > 3 || 10 > 12);
console.log("let five = !(4 > 3);//false=", !(4 > 3));
console.log("let six = !(4 < 3);//true=", !(4 < 3));
console.log("let eight = !(4 > 3 && 10 < 12);//false=", !(4 > 3 && 10 < 12));
console.log("let nine = !(4 > 3 && 10 > 12);//false=", !(4 > 3 && 10 > 12));
console.log("let ten = !(4 === '4');//false=", 4 === "4");
// 1. Өгөгдсөн жилийг өндөр жил мөн эсэхийг шалгаад хэрвээ мөн бол өндөр жил мөн үгүй бол үгүй гэж хариулна уу.
// Өндөр жил гэдэг нь 4 жилд нэг удаа болдог бөгөөд тэр нь 2-р сар 29 хоногтой үед тохиолддог. Энэ нь 4-д хуваагдаж байвал мөн, 100 хуваагдаж байвал өндөр жил биш. Харин 400 жилд бүтнээрээ хуваагдаж байвал мөн.
let year = prompt("Жилээ оруулана уу", " ");
if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0))
  console.log("Энэ жил өндөр жил байна");
else console.log("Энэ жил өндөр жил биш");
// 2. Гончигсумлай хоолны газар оров. Орсон хоолны газар нь 5000₮ - 30000₮ хооронд 15% нэмж төлдөг, бусад үед 20% - ийг нэмж төлдөг бол. Эдгээр тохиолдолуудад нийт хэдийг төлөхийг олно уу. Эдгээр тохиолдолуудад тус бүр хэдийг төлөх вэ? 3000₮, 27500₮, 100000₮.
// 3. Багш сурагчдын эцсийн шалгалтын дүнг дүгнэхээр болжээ
//      1. Бат - 67 оноо, Онц Дүмд - 59 оноо авчээ.
//      2. Шалгалтын онооноос хамааран багш тодорхой дүнгийн жагсаалт гаргах ёстой бөгөөд энэ нь
//          a. Хэрвээ оноо 60 хувиас доош байвал (60 орохгүй) - Маш муу
//          b. Хэрвээ оноо 60 - 70 (70 орохгүй) хооронд байвал - Хангалттай
//          c. Хэрвээ оноо 70 - 80 (80 орохгүй) хооронд байвал - Дунд
//          d. Хэрвээ оноо 80 - 90 (90 орохгүй) хооронд байвал - Сайн
//          e. Хэрвээ оноо 90 - 100 хооронд байвал - Маш сайн гэсэн үнэлгээг өгч байгаа юм байна.
//      3. Тэгвэл тухайн сурагчдыг тэнцсэн болоод тэнцээгүй эсэхийг жагсааж доорх хэлбэрээр
//          НЭР - АВСАН ОНОО - ҮНЭЛГЭЭ гэсэн маягаар console дээр харуулна уу.
const Bat = 67;
const Onts = 59;
if (Bat < 60 || Onts < 60) {
  console.log("Mash muu");
} else if (Bat >= 60 && Bat < 70) {
  console.log("Hanganalttай");
} else if (Bat >= 70 && Bat < 80) {
  console.log("Dund");
} else if (Bat >= 80 && Bat < 90) {
  console.log("Sain");
} else {
  console.log("Mash sain");
}
// 4. Өгөгдсөн 2 тооны ихийг олох функц бич.
// 5. Гараас утасны дугаар ( 99001234 ) аван шалгах, зөв дугаар бол харгалзах операторыг (Unitel, Mobicom, G-Mobile, Skytel) хэвлэх , буруу дугаар бол буруу гэсэн мессежийг өгөх
const num = prompt("Shalgah dugaaraa oruulana uu", "");
const num1 = parseInt(num / 1000000);
if (num.length !== 8) {
  console.log("Zuw dugaaraa oruulan uu");
} else if (num1 === 88 || num1 === 89 || num1 === 86 || num1 === 80) {
  console.log("This number is Unitel");
} else if (num1 === 99 || num1 === 85 || num1 === 95 || num1 === 94) {
  console.log("This number is Mobicom");
} else if (num1 === 91 || num1 === 96 || num1 === 90 || num1 === 92) {
  console.log("This number is Skytel");
} else if (num1 === 93 || num1 === 98 || num1 === 97) {
  console.log("This number is G-Mobile");
} else {
  console.log("Dugaaraa shalgaad dahin oruulan uu");
}
// 6. Тэгш өнцөгт гурвалжны 2 суурын урт өгөгдсөн(a, b) бол тухайн гурвалжины налуугын уртыг( c ) ол
const a = 4;
const b = 3;
const c = a * a + b * b;
console.log(
  "Тэгш өнцөгт гурвалжны 2 суурын урт өгөгдсөн 3, 4 бол тухайн гурвалжины налуугын урт=",
  Math.sqrt(c)
);
// 7. 4 н хувьсагч зарлан тоон утга өг.Өгөгдсөн 4 тооны 80-аас их тоонуудын нийлбэрийг ол.:
//      a=85 b=75 c=96 d=69
//      80-аас их тоонуудын нийлбэрийг: 181
const x = 85;
const y = 75;
const z = 96;
const q = 69;

// 4 numbers can be more than 80
// 


let m = 0;
if (x >= 80) {
  m = m + x;
} else if (y >= 80) {
  m = m + y;
} else if (z >= 80) {
  m = m + z;
} else {
  m = m + q;
}
console.log(m);
// 8. 4 н хувьсагч зарлан тоон утга өг.Өгөгдсөн 4 тооны 5-аас бага тоонуудын үржвэрийг ол. 5-аас бага тоо ядаж 1 байгаа:
//      a=3 b=7 c=2 d=4
//      5-аас бага тоонуудын үржвэр: 24

// 9. if … else ашиглан myAge болон yourAge-ийн утгыг харьцуул. Харьцуулалт дээр үндэслэн үр дүнг консол руу хөгшин (би эсвэл та) гэж тэмдэглэнэ үү. Насыг оруулахын тулд prompt("Насаа оруулна уу:")-г ашиглана уу.
const yourAge=prompt("Насаа оруулна уу:");
const myAge=20;
if(yourAge>myAge){
    console.log("Ta");
}
else{
    console.log("Chi");
}
// 10. Тухайн өгөгдсөн хувьсагчдаас хамгийн бага утгатай хувьсагчийг console дээр хэвлэнэ үү
//      жишээ нь: Input: 120, 33, 10, 12 output: 10
console.log("5n toonoos baga n oloh");
 const e1=120;
 const e2=33;
 const e3=10;
 const e4=12;
 const e5=21;
 if(e1<e2 && e1<e3 && e1<e4 && e1<e5){
    console.log("a="+e1);
 }
 else if(e2<e3 && e2<e4 && e2<e5){
    console.log("b="+e2);
 }
 else if(e3<e4 && e3<e5){
    console.log("c="+e3);
 }
 else if(e4<e5){
    console.log("d="+e4);
 }
 else{
    console.log("e="+e5);
 }
// 11. Өгөгдсөн эерэг тоо нь 3-ын үржвэр эсвэл 7-ын үржвэр эсэхийг шалгана уу
const even=24;
if(even%3===0){
    console.log("Ene too 3 iin urjever");
}
else if(even%7===0){
    console.log("Ene too 7 iin urjever");
}
else{
    console.log("ene too 3,7 hoyiin urjewer bish baina");
}
// 12. n тооны утгын дагуу эерэг эсвэл сөрөгийг олж хэвлэнэ.
//      negative
//      positive
const ni1=3;
 const ni2=-7;
 const ni3=2;
 const niilber=ni1+ni2+ni3;
 console.log("Ugugdsun 3n toonii niilber eyereg surug iig oloh");
 if(niilber>0){
    console.log("Positive")
 }
 else{
    console.log("Negative")
 }
// 13. weight, height гэсэн 2 хувьсагчид утга оруулахад тухайн хэмжээнээс хамааран биеийн жингийн индексийг тооцож тухайн индекс-д харгалзах утгыг хэвлэнэ.
//      Жингийн дутагдалтай
//      Эрүүл
//      Илүүдэл жинтэй
//      Хэт таргаллалттай
const height=prompt("UNduruu oruulan uu");
const weight=prompt("Jingee oruulan uu");
const l=height/100;
const l1=l+l;
const index=parseInt(weight/l1);
if(index>=21){
    console.log("Taraglalttai");
}
else if(index>=18 && index<21){
    console.log("Iluudel jintei");
}
else if(index>=14 && index<18){
    console.log("Hewiin jintei");
}
else{
    console.log("Turanhai");
}
// 14. Өгөгдсөн тооны тэгш эсвэл сондгой болохыг хэвлэж харуулна уу
const odd=prompt("tegsh, sondgoig shagah toogoo oruulan uu");
 console.log("tegsh sondgoig oloh");
 if(odd%2===0){
    console.log("This number is even")
 }
 else{
    console.log("This number is odd")
 }
// 15. Нас тооцоолох бодлого: yearOfBirth гэсэн хувьсагчид гараас төрсөн онийг ав. Тухайн оноос тухайн хүний насыг нь бодож гаргаад үр дүнгээ old гэсэн хувьсагчид оноо. Насанд нь харгалзах утгыг хэвлэ.
//      0 <= old <= 1 үед "Infant"
//      1 < old <= 3 үед "Toddler"
//      3 < old <= 5 үед "Preschool"
//      5 < old <=12 үед "Gradeschooler"
//      12 <old <= 18 үед "Teen"
//      18 < old <=21 үед "Youngadult"
const yearOfBirth=prompt("Tursun jilee oruulan uu");
const old=2024-yearOfBirth;
if(0 <=old && old<= 1){
    console.log("Infant");
}
else if(1 < old && old<= 3){
    console.log("Toddler");
}
else if(3 < old&&  old<= 5){
    console.log("Preschool");
}
else if(5 < old && old<= 12){
    console.log("Gradeschooler");
}
else if(12< old && old<= 18){
    console.log("Teen");
}
else if(18 < old && old<= 21){
    console.log("Youngadult");
}
else if(21 < old && old<= 50){
    console.log("Adult");
}
else{
    console.log("Elderly");
}