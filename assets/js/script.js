var date = $("#currentDay").text(moment().format('dddd') + ", " + moment().format('MMMM Do'));
setInterval(function() {
    var date = $("#currentDay").text(moment().format('dddd') + ", " + moment().format('MMMM Do'));
}, 60000);

var timeCheck = function (task, taskInfo) {
    taskTime = task.text();
    taskTime = taskTime.replace("AM", "");
    taskTime = taskTime.replace("PM", "");
    taskIndicator = task.text();
    taskIndicator = taskIndicator.replace(/[0-9]/g, "");
    //timeIndicator = moment().format('A');
    timeIndicator = "PM";
    time = 12;
    //time = moment().format("h");
    if (time === 12) {
        if (taskIndicator === "PM" && taskTime < 6) {
            taskInfo.removeClass("list-group-item-primary").addClass("list-group-item-success");
        }
        else if (taskTime === 12) {
            taskInfo.removeClass("list-group-item-primary").addClass("list-group-item-danger");
        }
    }
    else if(taskIndicator === "PM" && timeIndicator === "PM") {
        if (time < taskTime) {
            taskInfo.removeClass("list-group-item-primary").addClass("list-group-item-success");
        }
        else if (time > taskTime) {
        }
        else {
            taskInfo.removeClass("list-group-item-primary").addClass("list-group-item-danger");
        }
    }
    else if(taskIndicator === "AM" && timeIndicator === "AM") {
        if (time < taskTime) {
            taskInfo.removeClass("list-group-item-primary").addClass("list-group-item-success");
        }
        else if (time > taskTime) {
        }
        else {
            taskInfo.removeClass("list-group-item-primary").addClass("list-group-item-danger");
        }
    }
    else if(taskIndicator === "PM" && timeIndicator === "AM") {
        taskInfo.removeClass("list-group-item-primary").addClass("list-group-item-success");
    }
};

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
    timeCheck(hour, taskDiv);
    i++;
}

console.log(moment().format('A'));