import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const childProcessPath = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  spawn('node', [childProcessPath, ...args], {
    stdio: ['inherit', 'inherit', 'ignore']
  });
};

spawnChildProcess(['someArgument1', 'someArgument2', 'test1', 'test2']);
