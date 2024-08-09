const { Worker,QueueEvents } = require('bullmq')
const myWorker = new Worker('news', async (job)=>{

    await job.updateProgress(10);
    await job.updateProgress(20);
    await job.updateProgress(30);
    await job.updateProgress(40);
    await job.updateProgress(50);
    await job.updateProgress(60);
    await job.updateProgress(70);
    await job.updateProgress(70);
    await job.updateProgress({name:"amit"});

}, { connection: {
  host: "localhost",
  port: 6379
}});

const queueEvents = new QueueEvents('news');

// myWorker.on('completed',()=>{console.log("Job has been complted !")})
// myWorker.on('failed',()=>{console.log("Job has been fialed !")})
// myWorker.on('progress',(data)=>{console.log("Job inprogress !",data)})

queueEvents.on('completed',()=>{console.log("Job has been complted !")})
queueEvents.on('failed',()=>{console.log("Job has been fialed !")})
queueEvents.on('progress',(data)=>{console.log("Job inprogress !",data)})