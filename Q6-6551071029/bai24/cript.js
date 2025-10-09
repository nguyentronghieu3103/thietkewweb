function date(){
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value) - 1;
    var year = parseInt(document.getElementById("year").value);
    var date = new Date(year, month, day) ;  
    var thuVN = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
    var thu = thuVN[date.getDay()];
    var ketQua = `${thu} Ngày ${day} tháng ${month + 1} năm ${year}`;
    document.getElementById("ketqua").innerText = ketQua;
}