
let inputOne = prompt("Mời bạn nhập vào giá trị a : ");
let inputTwo = prompt("Mời bạn nhập vào giá trị b : ");
let inputThree = prompt("Mời bạn nhập vào giá trị c : ");

inputOne = Number(inputOne);
inputTwo = Number(inputTwo);
inputThree = Number(inputThree);

let denta = inputTwo**2 - 4 * inputOne * inputThree ;

if (inputOne == 0 ){
    document.write("Đây không phải là phương trình bậc 2 !");
} else {
    if(denta > 0){

        let x1 = (-inputTwo + Math.sqrt(denta)) / (2 * inputOne) ;
        let x2 = (-inputTwo - Math.sqrt(denta)) / (2 * inputOne) ;

        document.write(` Nghiệm 1 là : ${x1} ` + "<br/>");      
        document.write(` Nghiệm 2 là : ${x2} `);
    } else if (denta == 0){
        let x = -inputTwo / (2 * inputOne);
        document.write("Phương trình có nghiệm kép là : " + x );
    } else {
        document.write("Phương trình vô nghiệm !");
    }
}
