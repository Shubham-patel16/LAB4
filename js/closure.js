function squareNumber() {
    let num = document.getElementById("numberInput").value;
    let square = num * num;
    document.getElementById("output").innerText = `Square of ${num} is ${square}`;
}