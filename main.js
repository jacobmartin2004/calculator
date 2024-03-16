function getinputValue()  {
var num1 = parseInt(document.getElementById("input1").value);
var num2 = parseInt(document.getElementById("input2").value);
const cal = document.querySelector('input[name="cal"]:checked').value;
let result
switch (cal) {
    case 'add':
        result= num1+num2
        break
    case 'sub':
        result= num1-num2
        break
    case 'mul':
        result= num1*num2
        break

    default:
        break;
}
var val12= document.getElementById('rec');
val12.innerHTML = result

}