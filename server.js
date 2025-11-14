// const express = require("express");
// const fs = require("fs");
// const cors = require("cors");

// const app = express();
// app.use(cors()); // allow frontend requests
// app.use(express.json()); // parse JSON data from frontend

// const FILE_PATH = "./tasks.json";

// // helper functions
// function readTasks() {
//   if (!fs.existsSync(FILE_PATH)) return [];
//   const data = fs.readFileSync(FILE_PATH, "utf8");
//   return data ? JSON.parse(data) : [];
// }

// function writeTasks(tasks) {
//   fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2));
// }

// // ✅ CREATE (Add new task)
// app.post("/tasks", (req, res) => {
//   const tasks = readTasks();
//   const newTask = {
//     id: Date.now(),
//     text: req.body.text,
//   };
//   tasks.push(newTask);
//   writeTasks(tasks);
//   res.json(newTask);
// });

// // ✅ READ (Get all tasks)
// app.get("/tasks", (req, res) => {
//   const tasks = readTasks();
//   res.json(tasks);
// });

// // ✅ DELETE
// app.delete("/tasks/:id", (req, res) => {
//   const tasks = readTasks();
//   const filtered = tasks.filter((t) => t.id != req.params.id);
//   writeTasks(filtered);
//   res.json({ message: "Task deleted!" });
// });

// // ✅ UPDATE
// app.put("/tasks/:id", (req, res) => {
//   const tasks = readTasks();
//   const updated = tasks.map((t) =>
//     t.id == req.params.id ? { ...t, text: req.body.text } : t
//   );
//   writeTasks(updated);
//   res.json({ message: "Task updated!" });
// });

// app.listen(3000, () =>
//   console.log("✅ Server running on http://localhost:3000")
// );
