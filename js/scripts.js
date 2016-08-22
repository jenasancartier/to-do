//business logic
function ToDo(task, location, details, priority) {
  this.task = task;
  this.location = location;
  this.details = details;
  this.priority = priority;
}

//user interface logic
$(document).ready(function(){
  $("form#new-todo").submit(function(event){
    event.preventDefault();

    var inputtedTask = $("input#new-task").val();
    var inputtedLocation = $("input#new-location").val();
    var inputtedDetails = $("input#new-details").val();
    var inputtedPriority = $("input#priority").val();

    var newToDo = new ToDo(inputtedTask, inputtedLocation, inputtedDetails, inputtedPriority);

    $("ul#tasks").append("<li><span class='task'>" + newToDo.task + "</span></li>");


  });
});
