function transcript() {
    //orange
    let arrEng = ["banana", "apple", "orange", "pen", "pencil", "book"];
    let arrViet = ["chuối", "táo", "cam", "bút", "bút chì", "sách"];
    let string = document.getElementById("word").value;
    // let index_eng = 0;
    let result = "";
    for (let i = 0; i < arrEng.length; i++) {
        if (string == arrEng[i]) {
            result = arrViet[i];
        }
    }
    document.getElementById("result").innerHTML = result;
}