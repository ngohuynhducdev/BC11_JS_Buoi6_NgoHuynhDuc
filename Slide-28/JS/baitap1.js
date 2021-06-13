//Cấu trúc For
function submit(event) {
    event.preventDefault();
    var soChan = "";
    var soLe = "";
    for (var i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            soChan += i + " ";
        } else {
            soLe += i + " ";
        }
    }

    document.getElementById("divInso").innerHTML = "Số Chẵn: " + soChan + "<br/>" + "Số lẻ: " + soLe;
}
document.getElementById("btnInSo").onclick = submit;

//Cấu trúc while
function InSo(event) {
    event.preventDefault();
    var soChan = "";
    var soLe = "";
    var num = 100;
    var i = 0;
    while (i <= num) {
        if (i % 2 === 0) {
            soChan += i + " ";
        } else {
            soLe += i + " ";
        }
        //Tăng biến đếm
        i++;
    }
    document.getElementById("divInso1").innerHTML = "Số Chẵn: " + soChan + "<br/>" + "Số lẻ: " + soLe;
}
document.getElementById("btnInSo1").onclick = InSo;




