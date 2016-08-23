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
    var inputtedPriority = $("select#priority").val();

    var newToDo = new ToDo(inputtedTask, inputtedLocation, inputtedDetails, inputtedPriority);

    $("ul#tasks").append("<li><span class='task'>" + newToDo.task + " " + '<input type="checkbox" name="done" id="checkbox" />' + "</span></li>");

    $(".task").last().click(function() {
      $("#show-task").show();
      $("#show-task h2").text(newToDo.task);
      $(".task-name").text(newToDo.task);
      $(".location-name").text(newToDo.location);
      $(".detail-name").text(newToDo.details);
      $(".priority-name").text(newToDo.priority);
    });


  });

$("#complete").click(function(){
  var checkedCheckboxItem = $("input[name='done']:checked").parent();
  checkedCheckboxItem.remove();
});

});
