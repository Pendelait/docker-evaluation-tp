const tasks = [1];
let workers = [
    { url: 'http://worker0:8080', id: '' },
    { url: 'http://worker1:8081', id: '' }
  ]
const tasksPerWorker = Math.floor(tasks.length / workers.length);
let remainder = tasks.length % workers.length;

for (let i = 0; i < workers.length; i++) {
    let workerTasks = tasks.slice(i * tasksPerWorker, (i + 1) * tasksPerWorker);
    if (remainder > 0) {
        workerTasks.push(tasks[workers.length * tasksPerWorker + remainder - 1]);
        remainder--;
    }
    workers[i].tasks = workerTasks;
    workers[i].taskToDo = workerTasks.length 

}
console.log(workers);

let worker = workers.find(w => w.tasks.includes(1));
console.log(`Task 5 is assigned to worker ${worker.url}`);