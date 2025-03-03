
let a = Number(prompt("Mời bạn nhập vào 1 số bất kì a : "));
let b = Number(prompt("Mời bạn nhập vào 1 số bất kì b : "));
let c = Number(prompt("Mời bạn nhập vào 1 số bất kì c : "));

(a > b && a > c) ? alert(` Số lớn nhất trong 3 số là ${a}.`) :
 (b > c && b > a ) ? alert(` Số lớn nhất trong 3 số là ${b}.`) :
 (c > b && c > a ) ? alert(` Số lớn nhất trong 3 số là ${c}.`) :
 alert("Dữ liệu sai không có kết quả !");