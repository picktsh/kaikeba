const cluster = require('cluster')
const os = require('os')
const numCPUs = os.cpus.length // CPU 数量

const process = require('process')
const workers = {}
if (cluster.isMaster) {
  // 主进程
  for (let i = 0; i < numCPUs; i++) {
    cluster.on('exit', (work, code, signal) => {
      console.log('工作进程出错,重启');
      delete workers[worker.process.pid]
      let worker = cluster.fork();
      workers[worker.process.pid] = worker
    })
    
    let worker = cluster.fork();
    console.log('init ...pid', worker.process.pid);
    workers[worker.process.pid] = worker
  }
} else {
  // 其他进程
  const app = require('./app')
  app.listen(3000, () => {
    console.log('app start at localhost:3000')
  })
}
