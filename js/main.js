$("#play").click(function () { 
    $(".show").removeClass("show");
    $(".fix").addClass("show");
    // $('table td').text('');
    var random = ranDomArr();
    playGame(random)
});
    
function playGame(random) {
    console.log(random)
    $(document).ready(function () { 
        $(".number").click(function () {
            var a = $(this).text() + " ";
            var check = $(this).text()
            var b = $("#mess").text().slice(0, 6);
            var set = $("#mess").text().split(" ");
            console.log(set)
            if (set.indexOf(check) !== -1) {
                alert("Giá trị đã được nhập trước đó. Vui lòng nhập giá trị khác.");
                $("#mess").html(b);
            } else {
                $("#mess").html(b + a);
            }
        }); 
    });
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

                alert(random + " ==>> you wwin");
                $("#lamlai").addClass("show");

            }
            // console.log(dung);
        }else{
            alert("nhập thiếu giá trị!! -_-")
    }
    });
    $("#delete").click(function () {
        var input = $("#mess").text().split(""); 
        input.splice(-2);
        $("#mess").html(input.join(""));     
    });
}
$("#lamlai").click(function(){
    location.reload();
    // $(".show").removeClass("show");
    // $(".play").addClass("show");

})
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