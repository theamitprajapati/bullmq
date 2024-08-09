const { Queue } = require('bullmq')


// Create a new connection in every instance
const myQueue = new Queue('news', { connection: {
  host: "localhost",
  port: 6379
}});

myQueue.add("hello",{title:"IT news",description:"IT is best organization in the currenct market need more hiring for students etc.........."},{delay:5000})