var now = dayjs();
var today = dayjs().format("dddd, MMMM D");
var tasksContent = [];
if(localStorage.getItem("key")) {
    tasksContent = JSON.parse(localStorage.getItem("key"));
}
else {
    var tasksContent = ["click here to add task!", "click here to add task!", "click here to add task!", "click here to add task!", "click here to add task!", "click here to add task!", "click here to add task!", "click here to add task!", "click here to add task!"];
}
$("#currentDay").text(today);

setInterval(function() {
    now = dayjs();
    today = dayjs().format("dddd, MMMM D");
}, 60000);

var timeInt = function (task) {
    taskIndicator = task;
    taskIndicator = taskIndicator.replace(/[0-9]/g, "");
    if(taskIndicator === "AM") {
        taskTime = task.replace("AM", "");
    }
    else {
        taskTime = task.replace("PM", "");
    };
    taskTime = parseInt(taskTime);
    if(taskTime < 9) {
        taskTime += 12;
    }
    return taskTime;
};

var timeCheck = function (time, element) {
    if(time < now.$H) {
    }
    else if(time === now.$H) {
        element.removeClass("list-group-item-secondary").addClass("list-group-item-danger");
    }
    else {
        element.removeClass("list-group-item-secondary").addClass("list-group-item-success");
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
    var taskDiv = $("<div>").addClass("col-10 list-group-item list-group-item-secondary").attr("id", "task-" + i);
    var taskText = $("<p>").addClass("fw-b").text(tasksContent[i]);
    taskDiv.append(taskText);
    var button = $("<button>").html("<span class='oi oi-lock-locked'></span>").addClass("col-1 btn btn-info").attr("id", "button-" + i);
    hourRowWrapper.append(hour, taskDiv, button);
    $(".container").append(hourRowWrapper);
    timeCheck(timeInt(hour.text()), taskDiv);

    var inputCarrier = ""
    $("#task-" + i).on("click", "p", function() {
        inputCarrier = $("<input>");
        $(this).replaceWith(inputCarrier);
    });

    $("#button-" + i).on("click", function() {
        var newText = $("<p>").text(inputCarrier.val());
        inputCarrier.replaceWith(newText);
        var buttonId = $(this).attr("id");
        buttonId = buttonId.replace("button-", "");
        buttonId = parseInt(buttonId);
        tasksContent[buttonId] = inputCarrier.val();
        localStorage.setItem("key", JSON.stringify(tasksContent));
    });
    i++;
}