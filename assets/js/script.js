var date = $("#currentDay").text("placeholder");

i = 0;
while (i < 9) {
    var hourRowWrapper = $("<div>").addClass("row");
    if(i < 3) {
        var hour = $("<p>").text((9 + i) + "AM").addClass("col-1 list-group-item list-group-item-primary mb-0");
    }
    else if(i === 3){
        var hour = $("<p>").text(12 + "PM").addClass("col-1 list-group-item list-group-item-primary mb-0");
    }
    else {
        var hour = $("<p>").text((i - 3) + "PM").addClass("col-1 list-group-item list-group-item-primary mb-0");
    };
    var taskDiv = $("<div>").addClass("col-10 list-group-item list-group-item-secondary").attr("id", "task");
    var taskText = $("<p>").addClass("fw-b").text("placeholder");
    taskDiv.append(taskText);
    var button = $("<button>").html("<span class='oi oi-lock-locked'></span>").addClass("col-1 btn btn-info");
    hourRowWrapper.append(hour, taskDiv, button);
    $(".container").append(hourRowWrapper);
    i++;
}