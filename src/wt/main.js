import { Worker } from 'worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const workerPath = path.join(__dirname, 'worker.js');
const cpuNumber = os.cpus().length;
const startNumber = 10;
const resArray = [];

const performCalculations = async () => {
  const createWorker = (workerData) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(workerPath, { workerData });

      worker.on('message', resolve);
      worker.on('error', reject);
      worker.on('exit', (code) => {
        if(code !== 0) {
          reject();
        }
      });
    });
  };

  const runWorker = async (position) => {
    try {
      const result = await createWorker(startNumber + position);
      resArray[position] = { status: 'resolved', data: result};
    } catch (err) {
      resArray[position] = { status: 'error', data: null};
    }
  }

  const createRuns = async () => {
    const promisesArray = [];

    for(let i = 0; i <cpuNumber; i++) {
      promisesArray.push(runWorker(i));
    }
    return promisesArray;
  }

  await Promise.allSettled(await createRuns());
  console.log(resArray);

};

await performCalculations();