import fs from 'fs';
import path from 'path';
import { createHash } from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  try {
    const readStream = fs.createReadStream(filePath);
    const hash = createHash('sha256').setEncoding('hex');

    hash.on('finish', () => console.log(hash.read()));

    readStream.pipe(hash);
  } catch (err) {
    throw Error('FS operation failed');
  }
};

await calculateHash();