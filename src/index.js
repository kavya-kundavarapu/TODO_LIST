function Task(event) {
  // prevent form from refreshing
  event.preventDefault();

  // get input and list
  var inputTask = document.getElementById("task-input");
  var taskBody = document.getElementById("task-body");

  var taskText = inputTask.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // create <li> for new task
  var li = document.createElement("li");
  li.className =
    "list-group-item d-flex justify-content-between align-items-center";

  // create span to hold text
  var span = document.createElement("span");
  span.textContent = taskText;

  // create edit and delete buttons
  var editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "btn btn-sm btn-info mt-2  me-2 ";
  editButton.onclick = function () {
    var newText = prompt("Edit your task:", span.textContent);
    if (newText) span.textContent = newText;
  };

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "btn btn-sm btn-danger mt-2";

  deleteButton.onclick = function () {
    li.remove();
  };

  // add text + buttons to li
  var div = document.createElement("div");
  div.appendChild(editButton);
  div.appendChild(deleteButton);

  li.appendChild(span);
  li.appendChild(div);

  // add li to list
  taskBody.appendChild(li);

  // clear input
  inputTask.value = "";
}
