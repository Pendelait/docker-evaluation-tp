let workers = [
    { url: 'http://worker0:8080', id: '0', add : false , mult : true , tasks : []},
    { url: 'http://worker1:8081', id: '1' , add : true , mult : true , tasks : []},
    { url: 'http://worker1:8082', id: '2' , add : true , mult : false , tasks : []}
  ]
  

  const tasks = [
    { id: 1, operation: 'addition' },
    { id: 2, operation: 'multiplication' },
    { id: 3, operation: 'multiplication' },
    { id: 4, operation: 'addition' },
    { id: 5, operation: 'multiplication' }
  ];
  
  const addWorkers = workers.filter(worker => worker.add);
  const multWorkers = workers.filter(worker => worker.mult);
  
  const addTasks = tasks.filter(task => task.operation === 'addition');
  const multTasks = tasks.filter(task => task.operation === 'multiplication');
  
  let addIndex = 0;
  let multIndex = 0;
  
  for (let i = 0; i < addTasks.length; i++) {
      addWorkers[addIndex % addWorkers.length].tasks.push(addTasks[i]);
      addIndex++;
  }
  
  for (let i = 0; i < multTasks.length; i++) {
      multWorkers[multIndex % multWorkers.length].tasks.push(multTasks[i]);
      multIndex++;
  }
  
  workers.forEach(worker => worker.taskCount = worker.tasks.length);
  console.log(workers);
  