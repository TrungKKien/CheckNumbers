var test = false
var random 

//hàm bắt đầu trò chơi
$("#play").click(function () {
    $(".show").removeClass("show");
    $(".fix").addClass("show");
    $("tbody").empty();
    $('#mess').text('');
    if(test){
        random = 0
        test = false
    } 
    random = ranDomArr();
    test = true 
    console.log(random)
});

// sự kiện click cho các class number để nhập số vào input
$(".number").on("click", function () {
    var a = $(this).text() + " ";
    var check = $(this).text()
    var b = $("#mess").text().slice(0, 6);
    var set = $("#mess").text().split(" ");
    console.log(set.indexOf(check))
    if (set.indexOf(check) !== -1){
        console.log(b)
        $("#mess").html(b);
        return;
    }else{
        $("#mess").html(b + a);
        console.log(b + a)
        return;
    }
});   

//sự kiện click checks dãy số từ input vừa nhập
$("#submit").click(function () { 
    var input = $("#mess").text().split(" ");
    if(input.length > 4){
        var table = document.getElementById("myTable").getElementsByTagName("tbody")[0];
        var newRow = table.insertRow();
        var output =  $("#mess").text().split(",");
        document.getElementById("mess").innerHTML = ""
        var dung = 0;
        var vitri = 0;
        for(i = 0 ; i < 4 ; i++){
            for(j = 0 ; j < 4 ; j++){
                if(random[i] == input[j]){
                    dung++;
                }
            }
            if(random[i] == input[i]){
                    vitri++;
            }
        }
        var nameCell = newRow.insertCell();
        var ageCell = newRow.insertCell();
        var cityCell = newRow.insertCell();
        nameCell.innerHTML = output;
        ageCell.innerHTML = dung;
        cityCell.innerHTML = vitri;
        if(dung == 4 && vitri == 4){
            $(".show").removeClass("show");
            alert(output + " ==>> you wwin");
            $("#play").addClass("show");
            return 0;
        }
    }
});

//sự kiện click để xóa phần tử trong mảng input
$("#delete").click(function () {
    var input = $("#mess").text().split(""); 
    input.splice(-2);
    $("#mess").html(input.join(""));     
});

//hàm random lấy 4 số trog khoảng từ 1 đến 9
function ranDomArr(){
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var randomNumbers = [];
    while (randomNumbers.length < 4) {
        var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
        if (jQuery.inArray(randomNumber, randomNumbers) === -1) {
            randomNumbers.push(randomNumber);
        }
    }
    return randomNumbers;
}
