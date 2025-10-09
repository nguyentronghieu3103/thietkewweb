function luongthang(){
    var luong = parseInt(document.getElementById("luong").value);
    var hesoluong = parseFloat(document.getElementById("hesoluong").value);
    var luongmonth  = luong*hesoluong;
    document.getElementById("luongthang").textContent  = luongmonth;
}