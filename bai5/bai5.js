
let input = prompt("Mời bạn nhập vào 1 chuỗi bất kì");
let count = 0;

for (let i=0 ; i<input.length ;i++){
    if (input[i] == " "){
        alert("Chuỗi có chứa dấu cách .");
        count = 1;
        break;
    }
}
if (count == 0){
    alert("Chuỗi không chứa dấu cách .");
}