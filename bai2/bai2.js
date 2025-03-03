
let input = prompt("Mời bạn nhập vào 1 chuỗi hoặc kí tự bất kì ");
let count= 1;

for (let i=0 ; i<input.length ;i++){
    if (!isNaN(input[i]) || input[i] == " "){
        alert(`${input} không phải chữ cái !`);
        count = 0;
        break;
    }
}
if (count == 1){
    alert(`${input} là chữ cái .`);
}