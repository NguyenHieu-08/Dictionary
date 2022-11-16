function transcript() {
    //orange
    let arrEng = ["banana", "apple", "orange", "pen", "pencil", "book"];
    let arrViet = ["chuối", "táo", "cam", "bút", "bút chì", "sách"];
    let string = document.getElementById("word").value;
    // let index_eng = 0;
    let result = "";
    for (let i = 0; i < arrEng.length; i++) {
        if (string == arrEng[i]) {
            // index_eng = i;
            for (let j = 0; j < arrViet.length; j++) {
                if (i == j) {
                    result = arrViet[j];
                }
            }
        }
    }
    document.getElementById("result").innerHTML = result;
}