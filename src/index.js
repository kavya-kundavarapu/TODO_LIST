// // function Task(event) {
// //   event.preventDefault();
// //   var inputTask = document.getElementById("task-input").value;
// //   var taskBody = document.getElementById("task-body");
// //   document.getElementById("task-body").innerHTML = inputTask;
// //   var editButton = document.createElement("button");
// //   editButton.innerHTML = "edit";
// //   taskBody.appendChild(editButton);
// }
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
  editButton.className = "btn btn-sm btn-info me-2";
  editButton.onclick = function () {
    var newText = prompt("Edit your task:", span.textContent);
    if (newText) span.textContent = newText;
  };

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "btn btn-sm btn-danger";
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
// await fetch("http://localhost:3000/tasks", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ text }),
// });
// async function Task(event) {
//   // 1️⃣ prevent form from refreshing
//   event.preventDefault();

//   // 2️⃣ get input and list
//   var inputTask = document.getElementById("task-input");
//   var taskBody = document.getElementById("task-body");

//   var taskText = inputTask.value.trim();
//   if (taskText === "") {
//     alert("Please enter a task!");
//     return;
//   }

//   // 3️⃣ send task to backend using fetch()
//   try {
//     const response = await fetch("http://localhost:3000/tasks", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ text: taskText }),
//     });

//     const data = await response.json();
//     console.log("Saved on server:", data);
//   } catch (error) {
//     console.error("Error saving task:", error);
//   }

//   // 4️⃣ display on screen also
//   var li = document.createElement("li");
//   li.className =
//     "list-group-item d-flex justify-content-between align-items-center";

//   var span = document.createElement("span");
//   span.textContent = taskText;

//   var editButton = document.createElement("button");
//   editButton.textContent = "Edit";
//   editButton.className = "btn btn-sm btn-info me-2";
//   editButton.onclick = function () {
//     var newText = prompt("Edit your task:", span.textContent);
//     if (newText) span.textContent = newText;
//   };

//   var deleteButton = document.createElement("button");
//   deleteButton.textContent = "Delete";
//   deleteButton.className = "btn btn-sm btn-danger";
//   deleteButton.onclick = function () {
//     li.remove();
//   };

//   var div = document.createElement("div");
//   div.appendChild(editButton);
//   div.appendChild(deleteButton);

//   li.appendChild(span);
//   li.appendChild(div);

//   taskBody.appendChild(li);
//   inputTask.value = "";
// }
