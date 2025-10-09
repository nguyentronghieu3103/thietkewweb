    function nhan(){
        var a = parseInt(document.getElementById("int1").value);
        var b = parseInt(document.getElementById("int2").value);
        var result = a*b;
        document.getElementById("Result").textContent = "The Result is:" + result;
    }
    function chia() {
        const a = parseFloat(document.getElementById("int1").value);
        const b = parseFloat(document.getElementById("int2").value);
        if (b === 0) {
            document.getElementById("Result").textContent = "Cannot divide by zero!";
        } else {
            const result = a / b;
            document.getElementById("Result").textContent = "The Result Is: " + result;
        }
    }
