let tasks = [];

// Fetch tasks from the JSON file
fetch('tasks.json')
    .then(response => response.json())
    .then(data => {
        tasks = data; // Assign the tasks to your tasks array
    })
    .catch(error => console.error('Error loading tasks:', error));

function generateTask() {
    const taskElement = document.getElementById("task");
    if (tasks.length > 0) {
        const randomIndex = Math.floor(Math.random() * tasks.length);
        taskElement.innerText = `"${tasks[randomIndex]}"`;
    } else {
        taskElement.innerText = "No tasks available.";
    }
}
