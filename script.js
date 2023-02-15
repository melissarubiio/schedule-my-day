//Displays todays date
var currentDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDate);

//Will change styling based on times


var newHour =function(){
    var hourChosen = moment().hour() 

    for(var i = 9; i < 18; i++){
        var data = $("#data-"+i)  

        if(hourChosen > i){
            $(data).addClass("past");
        }
         else if (currentHour === i){
            $(data).addClass("present");
        }else{
            $(data).addClass("future")
        }
    }
}

newHour();

//Makes save button functional
var saveBtn = $('.saveBtn');

saveBtn.on("click", function() {
    var time = $(this).siblings(".hour").text();
    var task = $(this).siblings(".data").val();

    localStorage.setItem(time, task);
});

//Saves to localstorage, so that if screen is refreshed it will still appear

function rememberData () {
    $(".hour").each(function() {
        var rightNow = $(this).text();
        var myTask = localStorage.getItem(rightNow);

        if (myTask !== null) {
            $(this).siblings(".data").val(myTask);
        }
    });
}

rememberData();

